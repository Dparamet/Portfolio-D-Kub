"use client";

import { useState } from "react";
import { labProjects, labStatusColors, labCategoryColors } from "@/data/lab";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

const categoryTH: Record<string, string> = {
  All: "ทั้งหมด",
  "Vanilla JS": "วานิลลา JS",
  React: "รีแอคต์",
  Python: "ไพธอน",
};

const labTitleTH: Record<string, string> = {
  Calculator: "เครื่องคิดเลข",
  "Todo List": "รายการสิ่งที่ต้องทำ",
};

const labDescTH: Record<string, string> = {
  "A clean calculator built with pure Vanilla JS — no frameworks, just raw logic.":
    "เครื่องคิดเลขที่พัฒนาด้วย Vanilla JS ล้วน ๆ ไม่ใช้เฟรมเวิร์ก เน้นตรรกะการเขียนโค้ด",
  "A simple todo app with local storage persistence, add/remove/complete tasks.":
    "แอป Todo แบบง่าย พร้อมบันทึกข้อมูลใน localStorage เพิ่ม/ลบ/ทำเครื่องหมายงานเสร็จได้",
};

const statusTH: Record<string, string> = {
  Live: "ใช้งานแล้ว",
  "In Progress": "กำลังพัฒนา",
  "Coming Soon": "เร็ว ๆ นี้",
};

const statusColorsLight: Record<string, string> = {
  Live: "bg-sky-100 text-sky-700 border border-sky-300",
  "In Progress": "bg-blue-100 text-blue-700 border border-blue-300",
  "Coming Soon": "bg-slate-100 text-slate-600 border border-slate-300",
};

export default function LabSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const categories = Array.from(new Set(labProjects.map((p) => p.category)));
  const tabs = [
    { label: "All", count: labProjects.length },
    ...categories.map((category) => ({
      label: category,
      count: labProjects.filter((project) => project.category === category).length,
    })),
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? labProjects : labProjects.filter((p) => p.category === active);

  const ui = isThai
    ? {
        title: "ห้องทดลอง",
        subtitle: "พื้นที่ทดลองไอเดียและฝึกเขียนโค้ดแบบเน้นตรรกะ",
        emptyPrefix: "ยังไม่มีรายการในหมวด",
        view: "ดู →",
      }
    : {
        title: "The Lab",
        subtitle: "My playground for experimenting with logic — no frameworks, just raw code.",
        emptyPrefix: "No lab items in",
        view: "View →",
      };

  const getCategoryLabel = (label: string) =>
    isThai ? (categoryTH[label] ?? label) : label;

  const getLabTitle = (title: string) =>
    isThai ? (labTitleTH[title] ?? title) : title;

  const getLabDescription = (description: string) =>
    isThai ? (labDescTH[description] ?? description) : description;

  return (
    <section id="lab" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-slate-50" : "bg-zinc-950"}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{ui.title}</h2>
        <div className="w-16 h-1 bg-sky-400 rounded mb-4" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => {
              const colors =
                labCategoryColors[project.category] ?? labCategoryColors["default"];

              return (
                <div
                  key={project.id}
                  className={`rounded-2xl p-6 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${
                    isLight ? "bg-white border-slate-200" : "bg-zinc-900"
                  } ${colors.card}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-lg font-bold ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{getLabTitle(project.title)}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2 ${
                        isLight
                          ? (statusColorsLight[project.status] ?? labStatusColors[project.status])
                          : labStatusColors[project.status]
                      }`}
                    >
                      {isThai ? (statusTH[project.status] ?? project.status) : project.status}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                    {getLabDescription(project.description)}
                  </p>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 border rounded text-xs font-medium ${colors.tag}`}
                    >
                      {project.tech}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-semibold hover:underline ml-auto ${isLight ? "text-sky-600" : "text-sky-300"}`}
                      >
                        {ui.view}
                      </a>
                    )}
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
