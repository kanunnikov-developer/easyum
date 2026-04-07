'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getMetrikaId } from '@/lib/yandexMetrika';

interface Props {
  subdomain: string;
}

export default function YandexMetrika({ subdomain }: Props) {
  const pathname = usePathname();
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const metrikaId = getMetrikaId(subdomain);
    if (!metrikaId) return;

    // Отключаем в development, чтобы не засорять статистику
    if (process.env.NODE_ENV === 'development') {
      console.log(`[YandexMetrika] Development mode — метрика отключена для ${subdomain}`);
      return;
    }

    // Не инициализируем повторно, если уже загружен этот же ID
    if (initializedRef.current) return;

    console.log(`[YandexMetrika] Инициализация счётчика для "${subdomain}" → ID: ${metrikaId}`);

    // Удаляем старый скрипт, если есть
    if (scriptRef.current) {
      scriptRef.current.remove();
    }

    const script = document.createElement('script');
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${metrikaId}, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true,
        ecommerce: true
      });
    `;

    document.head.appendChild(script);
    scriptRef.current = script;
    initializedRef.current = true;

    // Отправка хита при смене страницы
    const handleRouteChange = () => {
      if (window.ym) {
        window.ym(Number(metrikaId), 'hit', window.location.href);
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [subdomain]);

  return null;
}