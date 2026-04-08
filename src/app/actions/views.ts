'use server';

import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const VIEW_COOKIE_PREFIX = 'viewed_post_';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 часа

export async function incrementView(slug: string): Promise<number> {
  const cookieStore = await cookies();
  const cookieName = VIEW_COOKIE_PREFIX + slug;

  // Если кука уже есть — не увеличиваем просмотры
  if (cookieStore.has(cookieName)) {
    const post = await prisma.postView.findUnique({
      where: { slug },
    });
    return post?.views || 0;
  }

  // Увеличиваем просмотры
  const updated = await prisma.postView.upsert({
    where: { slug },
    update: { views: { increment: 1 } },
    create: { slug, views: 1 },
  });

  // Ставим куку на 24 часа
  cookieStore.set(cookieName, 'true', {
    maxAge: COOKIE_MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: `/blog/${slug}`,
  });

  revalidatePath(`/blog/${slug}`);

  return updated.views;
}