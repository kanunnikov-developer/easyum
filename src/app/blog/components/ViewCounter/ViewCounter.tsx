'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { incrementView } from '@/app/actions/views';

interface Props {
  slug: string;
  initialViews: number;
}

export default function ViewCounter({ slug, initialViews }: Props) {
  const [views, setViews] = useState(initialViews);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Защита: увеличиваем только один раз за монтирование компонента
    if (hasIncremented) return;

    const runIncrement = async () => {
      const newViews = await incrementView(slug);
      setViews(newViews);
      setHasIncremented(true);
    };

    runIncrement();
  }, [slug, hasIncremented]); // зависимость от hasIncremented предотвращает повторные вызовы

  return (
    <div className={styles.viewCounter}>
      <Image src="/blog/iconsax-eye.svg" alt="" width={23} height={23} /> 
      {views} просмотров
    </div>
  );
}