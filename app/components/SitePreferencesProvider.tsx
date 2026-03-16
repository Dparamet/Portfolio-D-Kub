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

function parseStoredLanguage(value: string | null): SiteLanguage {
  return value === "th" ? "th" : "en";
}

function parseStoredTheme(value: string | null): SiteTheme {
  return value === "light" ? "light" : "dark";
}

export function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [theme, setTheme] = useState<SiteTheme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let savedLanguage: SiteLanguage = "en";
    let savedTheme: SiteTheme = "dark";

    try {
      savedLanguage = parseStoredLanguage(localStorage.getItem(LANGUAGE_KEY));
      savedTheme = parseStoredTheme(localStorage.getItem(THEME_KEY));
    } catch {
      // Ignore storage errors and keep safe defaults.
    }

    queueMicrotask(() => {
      setLanguage(savedLanguage);
      setTheme(savedTheme);
      setIsHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(LANGUAGE_KEY, language);
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore storage errors.
    }

    document.documentElement.setAttribute("lang", language);
    document.documentElement.dataset.theme = theme;
  }, [isHydrated, language, theme]);

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
