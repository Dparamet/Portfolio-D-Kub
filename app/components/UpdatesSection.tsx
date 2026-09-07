"use client";

// Compact "what I'm up to" feed. Add entries in data/updates.ts (newest first).

import type { CSSProperties } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { updates, type UpdateTag } from "@/data/updates";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";
import { getRevealDelay } from "@/lib/motion";

const tagTH: Record<UpdateTag, string> = {
  Launch: "เปิดตัว",
  Freelance: "ฟรีแลนซ์",
  Learning: "กำลังเรียน",
  Thesis: "ปริญญานิพนธ์",
  Leadership: "ภาวะผู้นำ",
  Update: "อัปเดต",
};

const tagStyle: Record<UpdateTag, { light: string; dark: string }> = {
  Launch: { light: "bg-emerald-50 text-emerald-700 ring-emerald-300", dark: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/30" },
  Freelance: { light: "bg-sky-50 text-sky-700 ring-sky-300", dark: "bg-sky-500/10 text-sky-300 ring-sky-400/30" },
  Learning: { light: "bg-violet-50 text-violet-700 ring-violet-300", dark: "bg-violet-500/10 text-violet-300 ring-violet-400/30" },
  Thesis: { light: "bg-amber-50 text-amber-700 ring-amber-300", dark: "bg-amber-500/10 text-amber-300 ring-amber-400/30" },
  Leadership: { light: "bg-indigo-50 text-indigo-700 ring-indigo-300", dark: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/30" },
  Update: { light: "bg-slate-100 text-slate-600 ring-slate-300", dark: "bg-zinc-700/40 text-zinc-300 ring-zinc-600" },
};

export default function UpdatesSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const ui = isThai
    ? { index: "อัปเดต", title: "อัปเดตล่าสุด", subtitle: "สิ่งที่กำลังทำ เรียน และเพิ่งส่งมอบ" }
    : { index: "UPDATES", title: "Latest Updates", subtitle: "What I'm building, learning, and shipping right now." };

  return (
    <section
      id="updates"
      className={`scroll-mt-16 px-6 py-20 md:px-20 ${isLight ? "bg-white" : "bg-black"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <p className="section-index mb-1">06 · {ui.index}</p>
          <h2 className={`mb-3 text-4xl font-bold md:text-5xl ${isLight ? "text-slate-900" : "text-zinc-100"}`}>
            {ui.title}
          </h2>
          <div className="accent-bar mb-4" />
          <p className={`mb-10 max-w-3xl ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{ui.subtitle}</p>
        </div>

        <ol className="space-y-3" aria-label={ui.title}>
          {updates.map((item, index) => {
            const style = isLight ? tagStyle[item.tag].light : tagStyle[item.tag].dark;

            return (
              <li
                key={item.id}
                data-reveal
                style={{ "--reveal-delay": getRevealDelay(index) } as CSSProperties}
                className={`motion-card flex flex-col gap-2 rounded-md border p-4 sm:flex-row sm:items-center sm:gap-4 ${
                  isLight
                    ? "border-slate-200 bg-slate-50 hover:border-sky-300"
                    : "border-zinc-800 bg-zinc-900 hover:border-sky-400/50"
                }`}
              >
                <time
                  className={`shrink-0 font-mono text-xs sm:w-40 ${isLight ? "text-slate-500" : "text-zinc-500"}`}
                >
                  {isThai ? item.dateTH : item.date}
                </time>

                <span
                  className={`w-fit shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${style}`}
                >
                  {isThai ? tagTH[item.tag] : item.tag}
                </span>

                <p className={`flex-1 text-sm ${isLight ? "text-slate-700" : "text-zinc-200"}`}>
                  {isThai ? item.titleTH : item.title}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${isThai ? item.titleTH : item.title} — ${isThai ? "เปิดลิงก์" : "open link"}`}
                    className={`shrink-0 text-xs ${isLight ? "text-sky-600 hover:text-sky-700" : "text-sky-300 hover:text-sky-200"}`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
