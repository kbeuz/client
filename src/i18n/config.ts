// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// lanaguage jsons
import uzTranslations from "./langs/uz.json";
import enTranslations from "./langs/en.json";
import ruTranslations from "./langs/ru.json";
import krillTranslations from "./langs/krill.json";

const storedLang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: uzTranslations,
    },
    en: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
    krill: {
      translation: krillTranslations,
    },
  },
  fallbackLng: storedLang || "uz",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
