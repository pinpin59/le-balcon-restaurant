"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";
import type { Translations } from "@/locales/fr";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: fr,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("fr");
  const t = lang === "fr" ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
