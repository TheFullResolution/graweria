export const Languages = {
  pl: 'pl',
  en: 'en',
} as const;

export type Languages = typeof Languages[keyof typeof Languages];
