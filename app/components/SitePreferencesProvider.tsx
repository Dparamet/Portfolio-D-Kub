"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type SiteLanguage = "en" | "th";
export type SiteTheme = "dark" | "light";

type SitePreferencesContextType = {
  language: SiteLanguage;
  setLanguage: (lang: SiteLanguage) => void;
  toggleLanguage: () => void;
  theme: SiteTheme;
  setTheme: (theme: SiteTheme) => void;
  toggleTheme: () => void;
};

const LANGUAGE_KEY = "portfolio.language";
const THEME_KEY = "portfolio.theme";

const SitePreferencesContext = createContext<SitePreferencesContextType | null>(null);

function getInitialLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "en";

  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  return savedLanguage === "th" ? "th" : "en";
}

function getInitialTheme(): SiteTheme {
  if (typeof window === "undefined") return "dark";

  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === "light" ? "light" : "dark";
}

export function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>(getInitialLanguage);
  const [theme, setTheme] = useState<SiteTheme>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    localStorage.setItem(THEME_KEY, theme);

    document.documentElement.setAttribute("lang", language);
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  const value = useMemo<SitePreferencesContextType>(() => {
    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "th" : "en")),
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    };
  }, [language, theme]);

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  }

  return context;
}
