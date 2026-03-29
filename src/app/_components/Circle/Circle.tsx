'use client';

import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Circle() {
  const elementsRef = useRef<(HTMLDivElement | HTMLImageElement)[]>([]);

  useEffect(() => {
    const elements = elementsRef.current.filter((el): el is HTMLDivElement | HTMLImageElement => el !== null);
    if (elements.length === 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      // 6 элементов → 6 значений интенсивности
      const intensities = [18, 14, 22, 12, 9, 5]; // последнее — для нового изображения

      elements.forEach((element, i) => {
        const intensity = intensities[i];
        const moveX = x * intensity * 0.6;   // общий множитель — регулирует силу эффекта
        const moveY = y * intensity * 0.65;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleMouseLeave = () => {
      elements.forEach(element => {
        element.style.transform = 'translate(0px, 0px)';
      });
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={el => { if (el) elementsRef.current[0] = el; }} className={styles.circle1} />
      <div ref={el => { if (el) elementsRef.current[1] = el; }} className={styles.circle2} />
      <div ref={el => { if (el) elementsRef.current[2] = el; }} className={styles.circle3} />
      <div ref={el => { if (el) elementsRef.current[3] = el; }} className={styles.circle4} />
      <div ref={el => { if (el) elementsRef.current[4] = el; }} className={styles.circle5} />
      <img 
        src="/icons/bg-circle-dark.svg" 
        ref={el => { if (el) elementsRef.current[5] = el; }} 
        className={styles.circle6} 
        alt="Иконка"
      />
    </>
  );
}