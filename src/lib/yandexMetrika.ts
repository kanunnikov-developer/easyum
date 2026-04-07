// lib/yandexMetrika.ts

export const YANDEX_METRIKA_IDS: Record<string, string> = {
  'it': '50281960',           
  // 'rostov': '',
  // 'krasnodar': '',
  // 'spb': '',
  // 'samara': '',
  // 'saratov': '',
  // 'vrn': '',
  // 'izhevsk': '',
  // 'nn': '',
  // 'ekaterinburg': '',
};

export function getMetrikaId(subdomain: string): string | null {
  return YANDEX_METRIKA_IDS[subdomain] || null;
}