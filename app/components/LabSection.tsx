"use client";

// UI for Soft Skill filters, card styles, and optional card images.
// Add or edit card content in data/softskills.ts.

import { useState, type CSSProperties } from "react";
import { softSkills, type SoftSkillLevel } from "@/data/softskills";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";
import SoftSkillThumbnail from "@/app/components/SoftSkillThumbnail";
import { getRevealDelay } from "@/lib/motion";

const categoryTH: Record<string, string> = {
  All: "ทั้งหมด",
  Communication: "การสื่อสาร",
  Teamwork: "การทำงานเป็นทีม",
  "Problem Solving": "การแก้ปัญหา",
  Leadership: "ภาวะผู้นำ",
  Hobby: "งานอดิเรก",
};

const levelTH: Record<string, string> = {
  Strong: "เด่น",
  Growing: "กำลังพัฒนา",
  Practice: "ฝึกต่อเนื่อง",
};

const levelColorsLight: Record<string, string> = {
  Strong: "bg-emerald-100 text-emerald-700 border border-emerald-300",
  Growing: "bg-blue-100 text-blue-700 border border-blue-300",
  Practice: "bg-slate-100 text-slate-600 border border-slate-300",
};

const levelColorsDark: Record<SoftSkillLevel, string> = {
  Strong: "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40",
  Growing: "bg-blue-500/20 text-blue-200 border border-blue-400/40",
  Practice: "bg-zinc-800 text-zinc-300 border border-zinc-700",
};

const categoryColors: Record<string, { card: string; tag: string }> = {
  Communication: {
    card: "border-sky-500/30 hover:border-sky-400/70",
    tag: "bg-sky-500/15 text-sky-200 border-sky-500/35",
  },
  Teamwork: {
    card: "border-cyan-500/30 hover:border-cyan-400/70",
    tag: "bg-cyan-500/15 text-cyan-200 border-cyan-500/35",
  },
  "Problem Solving": {
    card: "border-blue-500/30 hover:border-blue-400/70",
    tag: "bg-blue-500/15 text-blue-200 border-blue-500/35",
  },
  Leadership: {
    card: "border-indigo-500/30 hover:border-indigo-400/70",
    tag: "bg-indigo-500/15 text-indigo-200 border-indigo-500/35",
  },
  Hobby: {
    card: "border-pink-500/30 hover:border-pink-400/70",
    tag: "bg-pink-500/15 text-pink-200 border-pink-500/35",
  },
  default: {
    card: "border-zinc-700 hover:border-sky-500/60",
    tag: "bg-zinc-800 text-zinc-200 border-zinc-700",
  },
};

export default function SoftSkillsSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const categories = Array.from(new Set(softSkills.map((item) => item.category)));
  const tabs = [
    { label: "All", count: softSkills.length },
    ...categories.map((category) => ({
      label: category,
      count: softSkills.filter((item) => item.category === category).length,
    })),
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? softSkills : softSkills.filter((item) => item.category === active);

  const ui = isThai
    ? {
        title: "ทักษะด้านการทำงาน",
        subtitle: "ทักษะการทำงานร่วมกับผู้อื่น แนวคิดที่ใช้พัฒนาโครงการ และงานอดิเรกที่ช่วยเสริมความคิดสร้างสรรค์",
        emptyPrefix: "ยังไม่มีรายการในหมวด",
        view: "ดู →",
      }
    : {
        title: "Soft Skill",
        subtitle: "Core interpersonal skills I use in projects, plus hobbies that keep me creative.",
        emptyPrefix: "No soft-skill items in",
        view: "View →",
      };

  const getCategoryLabel = (label: string) =>
    isThai ? (categoryTH[label] ?? label) : label;

  return (
    <section id="soft-skill" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-slate-50" : "bg-zinc-950"}`}>
      <div className="max-w-6xl mx-auto">
        <div data-reveal>
          <p className="section-index mb-1">05 · {ui.title.toUpperCase()}</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{ui.title}</h2>
          <div className="accent-bar mb-4" />
          <p className={`mb-8 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{ui.subtitle}</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActive(tab.label)}
                aria-pressed={active === tab.label}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === tab.label
                    ? isLight
                      ? "bg-sky-600 text-white shadow-md shadow-sky-300/40"
                      : "bg-sky-400 text-black shadow-md shadow-sky-900/30"
                    : isLight
                      ? "bg-white text-slate-700 border border-slate-300 hover:border-sky-500"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-700 hover:border-sky-400/70"
                }`}
              >
                <span>{getCategoryLabel(tab.label)}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    active === tab.label
                      ? isLight
                        ? "bg-white/25 text-white"
                        : "bg-black/20 text-black"
                      : isLight
                        ? "bg-slate-100 text-sky-600"
                        : "bg-zinc-800 text-sky-300"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <div
            className={`rounded-2xl border border-dashed p-8 text-center ${
              isLight
                ? "border-sky-300 bg-white text-slate-600"
                : "border-sky-400/40 bg-zinc-900 text-zinc-400"
            }`}
          >
            {ui.emptyPrefix} <span className={`font-semibold ${isLight ? "text-sky-600" : "text-sky-300"}`}>{getCategoryLabel(active)}</span> {isThai ? "นะ" : "yet."}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => {
              const colors =
                categoryColors[item.category] ?? categoryColors.default;
              const itemTitle = isThai ? item.titleTH : item.title;
              const itemDescription = isThai
                ? item.descriptionTH
                : item.description;
              const itemFocus = isThai ? item.focusTH : item.focus;

              return (
                <div
                  key={item.id}
                  data-reveal
                  style={
                    { "--reveal-delay": getRevealDelay(index) } as CSSProperties
                  }
                  className={`motion-card group flex flex-col overflow-hidden rounded-md border shadow-sm hover:shadow-md ${
                    isLight ? "bg-white border-slate-200" : "bg-zinc-900"
                  } ${colors.card}`}
                >
                  <SoftSkillThumbnail
                    item={item}
                    isLight={isLight}
                    isThai={isThai}
                  />

                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className={`truncate text-sm font-bold ${isLight ? "text-slate-900" : "text-zinc-100"}`}>
                        {itemTitle}
                      </h3>
                      <span
                        className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          isLight
                            ? (levelColorsLight[item.level] ?? levelColorsDark[item.level])
                            : levelColorsDark[item.level]
                        }`}
                      >
                        {isThai ? (levelTH[item.level] ?? item.level) : item.level}
                      </span>
                    </div>

                    <p className={`mb-4 line-clamp-2 text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                      {itemDescription}
                    </p>

                    <div className={`mt-auto flex items-center gap-3 border-t pt-3 ${isLight ? "border-slate-200" : "border-zinc-700"}`}>
                      <span
                        className={`truncate rounded border px-2 py-1 text-[11px] font-medium ${
                          isLight
                            ? "border-slate-200 bg-slate-100 text-slate-700"
                            : colors.tag
                        }`}
                      >
                        {itemFocus}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`ml-auto text-xs font-semibold hover:underline ${isLight ? "text-sky-600" : "text-sky-300"}`}
                        >
                          {ui.view}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
