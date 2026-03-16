"use client";

import { useEffect, useState } from "react";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

type NavItem = {
  href: string;
  label: {
    en: string;
    th: string;
  };
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    href: "#home",
    label: { en: "Home", th: "หน้าแรก" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    href: "#about",
    label: { en: "About", th: "เกี่ยวกับ" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "#projects",
    label: { en: "Projects", th: "ผลงาน" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "#soft-skill",
    label: { en: "Soft Skill", th: "ซอฟต์สกิล" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.697 4.383 1.621 4.383H19.11c2.318 0 3.241-2.762 1.621-4.383l-6.293-6.294A1.5 1.5 0 0 1 14 8.818V3.936Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: { en: "Contact", th: "ติดต่อ" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
  },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function FloatingNav() {
  const [active, setActive] = useState("#home");
  const { language, theme } = useSitePreferences();
  const isLight = theme === "light";
  const isThai = language === "th";

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "#home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        if (top <= marker) {
          current = `#${id}`;
        }
      }

      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const itemClass = (isActive: boolean) =>
    [
      "group relative flex items-center justify-center rounded-2xl border shadow-lg transition-all duration-200",
      "hover:scale-105",
      isActive
        ? isLight
          ? "bg-sky-500 text-white border-sky-400 shadow-sky-400/30"
          : "bg-sky-500 text-black border-sky-400 shadow-sky-900/50"
        : isLight
          ? "bg-white/95 backdrop-blur-sm border-slate-200 text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-400"
          : "bg-zinc-900/90 backdrop-blur-sm border-zinc-700 text-zinc-300 hover:bg-sky-500 hover:text-black hover:border-sky-400",
    ].join(" ");

  return (
    <>
      {/* Desktop: left floating rail */}
      <nav className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {navItems.map((item) => {
          const isActive = active === item.href;
          const label = isThai ? item.label.th : item.label.en;

          return (
            <a
              key={item.href}
              href={item.href}
              title={label}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className={`${itemClass(isActive)} w-12 h-12`}
            >
              {item.icon}
              <span
                className={`pointer-events-none absolute left-14 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150 ${
                  isLight
                    ? "border border-slate-300 bg-white text-slate-700"
                    : "border border-zinc-700 bg-black text-zinc-100"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile: bottom floating bar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`flex items-center gap-2 p-2 rounded-2xl border backdrop-blur-md shadow-xl ${
            isLight
              ? "border-slate-200 bg-white/95 shadow-slate-300/40"
              : "border-zinc-700 bg-black/90 shadow-sky-900/30"
          }`}
        >
          {navItems.map((item) => {
            const isActive = active === item.href;
            const label = isThai ? item.label.th : item.label.en;

            return (
              <a
                key={item.href}
                href={item.href}
                title={label}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className={`${itemClass(isActive)} w-10 h-10 rounded-xl shadow-sm`}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
