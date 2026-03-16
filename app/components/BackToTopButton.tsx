"use client";

import { useEffect, useState } from "react";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

export default function BackToTopButton() {
  const { language, theme } = useSitePreferences();
  const [visible, setVisible] = useState(false);

  const isThai = language === "th";
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={isThai ? "กลับไปด้านบน" : "Back to top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-20 md:bottom-6 z-[55] rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg transition-colors ${
        isLight
          ? "bg-white text-slate-700 border-slate-300 hover:border-sky-500"
          : "bg-zinc-900 text-zinc-100 border-zinc-700 hover:border-sky-400"
      }`}
    >
      {isThai ? "กลับบนสุด" : "Top"}
    </button>
  );
}
