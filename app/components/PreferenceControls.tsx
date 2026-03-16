"use client";

import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

export default function PreferenceControls() {
  const { language, toggleLanguage, theme, toggleTheme } = useSitePreferences();

  const isLight = theme === "light";
  const isThai = language === "th";

  const panelClass = isLight
    ? "bg-white/95 border-slate-200 text-slate-700 shadow-slate-300/40"
    : "bg-zinc-900/90 border-zinc-700 text-zinc-200 shadow-black/40";

  const buttonClass = isLight
    ? "bg-slate-100 border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-600"
    : "bg-zinc-800 border-zinc-600 text-zinc-100 hover:border-sky-400 hover:text-sky-300";

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <div className={`flex items-center gap-2 rounded-2xl border p-2 backdrop-blur-md shadow-lg ${panelClass}`}>
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${buttonClass}`}
        >
          {isThai ? "TH" : "EN"}
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${buttonClass}`}
        >
          {isLight ? (isThai ? "สว่าง" : "Light") : (isThai ? "มืด" : "Dark")}
        </button>
      </div>
    </div>
  );
}
