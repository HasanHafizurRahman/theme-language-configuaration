// utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations for different languages
import translationEN from '../lib/en.json';
import translationBN from '../lib/bn.json';

const resources = {
  en: {
    translation: translationEN,
  },
  bn: {
    translation: translationBN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
