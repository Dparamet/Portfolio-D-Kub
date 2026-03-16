"use client";

import { useMemo, useState } from "react";
import { softSkills, type SoftSkillCategory } from "@/data/softskills";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

const categoryTH: Record<SoftSkillCategory | "All", string> = {
  All: "ทั้งหมด",
  Communication: "การสื่อสาร",
  Collaboration: "การทำงานร่วมกัน",
  Leadership: "ภาวะผู้นำ",
  "Problem Solving": "การแก้ปัญหา",
  Adaptability: "การปรับตัว",
};

const categoryPill: Record<SoftSkillCategory, string> = {
  Communication: "bg-sky-100 text-sky-700 border border-sky-300",
  Collaboration: "bg-cyan-100 text-cyan-700 border border-cyan-300",
  Leadership: "bg-blue-100 text-blue-700 border border-blue-300",
  "Problem Solving": "bg-indigo-100 text-indigo-700 border border-indigo-300",
  Adaptability: "bg-slate-100 text-slate-700 border border-slate-300",
};

export default function SoftSkillsSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const [active, setActive] = useState<SoftSkillCategory | "All">("All");
  const [focusId, setFocusId] = useState(softSkills[0]?.id ?? "");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(softSkills.map((item) => item.category)))] as const,
    [],
  );

  const filtered = useMemo(
    () => softSkills.filter((item) => active === "All" || item.category === active),
    [active],
  );

  const focusSkill = useMemo(() => {
    const preferred = filtered.find((item) => item.id === focusId);
    if (preferred) return preferred;
    return filtered[0] ?? softSkills[0];
  }, [filtered, focusId]);

  const pickRandomSkill = () => {
    const source = filtered.length ? filtered : softSkills;
    const random = source[Math.floor(Math.random() * source.length)];
    if (!random) return;
    setFocusId(random.id);
  };

  const ui = isThai
    ? {
        title: "Soft Skills",
        subtitle: "ทักษะการทำงานร่วมกับคน ที่ช่วยให้งานเทคนิคเดินได้เร็วขึ้น",
        categoryAll: "ทั้งหมด",
        level: "ระดับ",
        focusTitle: "โหมดฝึกวันนี้",
        focusButton: "สุ่มโจทย์ฝึก soft skill",
        focusHint: "โฟกัสเล็ก ๆ วันนี้",
      }
    : {
        title: "Soft Skills",
        subtitle: "People skills that make technical work smoother and faster.",
        categoryAll: "All",
        level: "Level",
        focusTitle: "Today Practice Mode",
        focusButton: "Pick a random soft skill",
        focusHint: "Small focus for today",
      };

  const getCategoryLabel = (category: SoftSkillCategory | "All") =>
    isThai ? categoryTH[category] : category;

  return (
    <section id="softskills" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-slate-50" : "bg-black"}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{ui.title}</h2>
        <div className="w-16 h-1 bg-sky-400 rounded mb-4" />
        <p className={`mb-8 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{ui.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === category
                  ? isLight
                    ? "bg-sky-600 text-white border-sky-500"
                    : "bg-sky-400 text-black border-sky-300"
                  : isLight
                    ? "bg-white text-slate-700 border-slate-300 hover:border-sky-500"
                    : "bg-zinc-900 text-zinc-200 border-zinc-700 hover:border-sky-400"
              }`}
            >
              {category === "All" ? ui.categoryAll : getCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((skill) => {
              const levelPercent = `${(skill.level / 5) * 100}%`;

              return (
                <article
                  key={skill.id}
                  className={`rounded-2xl border p-5 shadow-sm ${
                    isLight ? "bg-white border-slate-200" : "bg-zinc-900 border-zinc-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className={`text-base font-bold ${isLight ? "text-slate-900" : "text-zinc-100"}`}>
                      {isThai ? skill.title.th : skill.title.en}
                    </h3>
                    <span className={`text-[11px] px-2 py-1 rounded-full font-semibold ${categoryPill[skill.category]}`}>
                      {getCategoryLabel(skill.category)}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                    {isThai ? skill.summary.th : skill.summary.en}
                  </p>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={isLight ? "text-slate-500" : "text-zinc-400"}>{ui.level}</span>
                      <span className={isLight ? "text-slate-500" : "text-zinc-400"}>{skill.level}/5</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isLight ? "bg-slate-200" : "bg-zinc-800"}`}>
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-cyan-400"
                        style={{ width: levelPercent }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside
            className={`rounded-2xl border p-5 h-fit sticky top-24 ${
              isLight ? "bg-white border-slate-200" : "bg-zinc-900 border-zinc-700"
            }`}
          >
            <p className={`text-xs uppercase tracking-widest mb-2 ${isLight ? "text-sky-600" : "text-sky-300"}`}>
              {ui.focusTitle}
            </p>
            <h3 className={`font-bold mb-2 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>
              {focusSkill ? (isThai ? focusSkill.title.th : focusSkill.title.en) : "-"}
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
              {focusSkill ? (isThai ? focusSkill.practicePrompt.th : focusSkill.practicePrompt.en) : "-"}
            </p>

            <button
              type="button"
              onClick={pickRandomSkill}
              className={`w-full rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                isLight
                  ? "bg-sky-600 text-white hover:bg-sky-500"
                  : "bg-sky-400 text-black hover:bg-sky-300"
              }`}
            >
              {ui.focusButton}
            </button>

            <p className={`text-xs mt-3 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
              {ui.focusHint}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
