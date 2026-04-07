// types/yandex-metrika.d.ts

// Полное объявление глобальной переменной ym от Яндекс.Метрики
declare global {
  interface Window {
    ym: YandexMetrika;
  }
}

interface YandexMetrika {
  (id: string | number, method: string, ...params: any[]): void;
  a?: any[];
  l?: number;
}

// Это нужно, чтобы файл считался модулем
export {};