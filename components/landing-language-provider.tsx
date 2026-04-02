"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  LANDING_TRANSLATIONS,
  type LandingLang,
  type LandingMsgKey,
} from "@/lib/landing-translations";

const STORAGE_KEY = "labsbot-landing-lang";

function readStoredLang(): LandingLang {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "de" || raw === "ru") return raw;
  return "en";
}

type LandingLanguageContextValue = {
  lang: LandingLang;
  setLang: (lang: LandingLang) => void;
  t: (key: LandingMsgKey) => string;
};

const LandingLanguageContext = createContext<LandingLanguageContextValue | null>(
  null
);

export function LandingLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<LandingLang>("en");

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  const setLang = useCallback((next: LandingLang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: LandingMsgKey) => LANDING_TRANSLATIONS[lang][key] ?? LANDING_TRANSLATIONS.en[key],
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t]
  );

  return (
    <LandingLanguageContext.Provider value={value}>
      {children}
    </LandingLanguageContext.Provider>
  );
}

export function useLandingLang() {
  const ctx = useContext(LandingLanguageContext);
  if (!ctx) {
    throw new Error("useLandingLang must be used within LandingLanguageProvider");
  }
  return ctx;
}
