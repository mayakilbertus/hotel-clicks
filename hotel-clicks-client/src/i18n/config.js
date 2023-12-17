import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Overview of Clicks Grand Hotel Example",
      yAxisLabel: "Number of Clicks",
      updateBtn: "Update",
      languageSelector: "Select language",
    },
  },
  de: {
    translation: {
      title: "Klickübersicht Grand Hotel Beispiel",
      yAxisLabel: "Anzahl der Klicks",
      updateBtn: "Aktualisieren",
      languageSelector: "Sprache auswählen",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
