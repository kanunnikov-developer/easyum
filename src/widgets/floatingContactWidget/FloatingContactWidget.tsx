'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FloatingContactWidget.module.css';

const states = [
  { color: '#ff3d54', icon: 'https://img.icons8.com/ios-glyphs/96/FFFFFF/phone--v1.png', margin: '0' },
  { color: '#0088cc', icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/telegram-app.png', margin: '3px' },
  { color: '#24cc63', icon: 'https://img.icons8.com/windows/96/FFFFFF/whatsapp--v1.png', margin: '0' },
  { color: '#4842C0', icon: 'https://maxicons.ru/icons/Max_logo.svg', margin: '0' }
];

interface Drop {
  id: number;
  color: string;
}

const FloatingContactWidget = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [drops, setDrops] = useState<Drop[]>([]);
  const dropIdCounter = useRef(0);

  // Автосмена главной иконки только когда виджет закрыт
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showButtons) {
        setIsChanging(true);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % states.length);
          
          // Эффект капли
          const newDrop = {
            id: dropIdCounter.current++,
            color: states[(currentIndex + 1) % states.length].color
          };
          setDrops((prev) => [...prev, newDrop]);

          setIsChanging(false);
        }, 500); // Совпадает с fade-out в CSS
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [showButtons, currentIndex]);

  const handleMouseEnter = () => {
    // Раскрываем по наведению только на устройствах с мышкой
    // Это предотвращает двойное срабатывание (hover + click) на телефонах
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setShowButtons(true);
    }
  };

  const handleClick = () => {
    setShowButtons((prev) => !prev);
  };

  const removeDrop = (id: number) => {
    setDrops((prev) => prev.filter((d) => d.id !== id));
  };

  const currentState = states[currentIndex];

  // Основная иконка меняется при раскрытии
  const currentIcon = showButtons 
    ? 'https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png'
    : currentState.icon;

  const currentBgColor = showButtons ? '#ff3d54' : currentState.color;
  const currentMargin = showButtons ? '0' : currentState.margin;

  return (
    <div className={showButtons ? styles.showButtons : ''}>
      {/* Вторичные кнопки */}
      <a className={styles.fixedButtonSecond} href="tel:+79669990685" target="_blank" rel="noopener noreferrer">
        <div className={styles.tooltip}>Позвонить</div>
        <Image 
          style={{ marginTop: '2px' }} 
          width={30} 
          height={30} 
          src="https://img.icons8.com/ios-glyphs/96/FFFFFF/phone--v1.png" 
          alt="phone--v1"
          unoptimized
        />
      </a>

      <a className={styles.fixedButtonThird} href="https://wa.me/79163101105?text=" target="_blank" rel="noopener noreferrer">
        <div className={styles.tooltip}>WhatsApp</div>
        <Image 
          width={35} 
          height={35} 
          src="https://img.icons8.com/windows/96/FFFFFF/whatsapp--v1.png" 
          alt="whatsapp--v1"
          unoptimized
        />
      </a>

      <a className={styles.fixedButtonFourth} href="https://t.me/+79262290485" target="_blank" rel="noopener noreferrer">
        <div className={styles.tooltip}>Telegram</div>
        <Image 
          style={{ marginRight: '3px' }} 
          width={25} 
          height={25} 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/telegram-app.png" 
          alt="telegram-app"
          unoptimized
        />
      </a>

      <a className={styles.fixedButtonFifth} href="https://max.ru/u/f9LHodD0cOIpx7XKrzCEXWMbty7_d7Rnr0Etp7xK0aBhFHO-kiRFqXbgL3s" target="_blank" rel="noopener noreferrer">
        <div className={styles.tooltip}>Max</div>
        <Image 
          width={25} 
          height={25} 
          src="https://maxicons.ru/icons/Max_logo.svg" 
          alt="max-app"
          unoptimized
        />
      </a>

      {/* Главная кнопка */}
      <div
        className={styles.fixedButton}
        style={{ backgroundColor: currentBgColor }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className={styles.tooltip}>Свернуть</div>
        {/* Эффект капли */}
        {drops.map((drop) => (
          <span
            key={drop.id}
            className={styles.firstBtnDrop}
            style={{ backgroundColor: drop.color }}
            onAnimationEnd={() => removeDrop(drop.id)}
          />
        ))}

        <Image
          src={currentIcon}
          alt="icon"
          width={30}
          height={30}
          style={{ marginRight: currentMargin }}
          className={isChanging ? styles.fadeOut : ''}
          unoptimized // Чтобы избежать проблем с внешними доменами и оптимизацией для маленьких иконок
        />
      </div>
    </div>
  );
};

export default FloatingContactWidget;
