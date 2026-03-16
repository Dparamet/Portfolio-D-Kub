"use client";

import { useState } from "react";
import { projects, statusColors } from "@/data/projects";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

const categoryTH: Record<string, string> = {
  All: "ทั้งหมด",
  Web: "เว็บ",
  IoT: "ไอโอที",
  Mobile: "มือถือ",
};

const projectTitleTH: Record<string, string> = {
  "E-commerce Website": "เว็บไซต์อีคอมเมิร์ซ",
  "IoT Dashboard": "แดชบอร์ด IoT",
};

const projectDescTH: Record<string, string> = {
  "A full-stack e-commerce platform with product listings, cart, and checkout flow.":
    "แพลตฟอร์มอีคอมเมิร์ซแบบ Full-stack พร้อมรายการสินค้า ตะกร้า และขั้นตอนชำระเงิน",
  "A real-time dashboard for monitoring IoT sensor data with live charts and alerts.":
    "แดชบอร์ดแบบเรียลไทม์สำหรับติดตามข้อมูลเซนเซอร์ IoT พร้อมกราฟสดและการแจ้งเตือน",
};

const statusTH: Record<string, string> = {
  Completed: "เสร็จแล้ว",
  "In Progress": "กำลังพัฒนา",
  "Coming Soon": "เร็ว ๆ นี้",
};

const statusColorsLight: Record<string, string> = {
  Completed: "bg-sky-100 text-sky-700 border border-sky-300",
  "In Progress": "bg-blue-100 text-blue-700 border border-blue-300",
  "Coming Soon": "bg-slate-100 text-slate-600 border border-slate-300",
};

export default function ProjectsSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const tabs = [
    { label: "All", count: projects.length },
    ...categories.map((category) => ({
      label: category,
      count: projects.filter((project) => project.category === category).length,
    })),
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const ui = isThai
    ? {
        title: "ผลงาน",
        subtitle: "ตัวอย่างงานที่ผมพัฒนาและกำลังทำอยู่",
        emptyPrefix: "ยังไม่มีผลงานในหมวด",
        liveDemo: "ดูผลงาน →",
        github: "GitHub →",
      }
    : {
        title: "Projects",
        subtitle: "Things I've built or am currently working on.",
        emptyPrefix: "No projects in",
        liveDemo: "Live Demo →",
        github: "GitHub →",
      };

  const getCategoryLabel = (label: string) =>
    isThai ? (categoryTH[label] ?? label) : label;

  const getProjectTitle = (title: string) =>
    isThai ? (projectTitleTH[title] ?? title) : title;

  const getProjectDescription = (description: string) =>
    isThai ? (projectDescTH[description] ?? description) : description;

  return (
    <section id="projects" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-white" : "bg-zinc-950"}`}>
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
                ? "border-sky-300 bg-sky-50 text-slate-600"
                : "border-sky-400/40 bg-zinc-900 text-zinc-400"
            }`}
          >
            {ui.emptyPrefix} <span className={`font-semibold ${isLight ? "text-sky-600" : "text-sky-300"}`}>{getCategoryLabel(active)}</span> {isThai ? "นะ" : "yet."}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${
                  isLight
                    ? "bg-white border-slate-200 hover:border-sky-400/60"
                    : "bg-zinc-900 border-zinc-700 hover:border-sky-400/40"
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/60 font-bold text-lg px-4 text-center">
                    {getProjectTitle(project.title)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className={`text-lg font-bold ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{getProjectTitle(project.title)}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                        isLight
                          ? (statusColorsLight[project.status] ?? statusColors[project.status])
                          : statusColors[project.status]
                      }`}
                    >
                      {isThai ? (statusTH[project.status] ?? project.status) : project.status}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                    {getProjectDescription(project.description)}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-1 border rounded text-xs font-medium ${
                          isLight
                            ? "bg-slate-50 text-slate-700 border-slate-200"
                            : "bg-zinc-900 text-zinc-200 border-zinc-700"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.link || project.repo) && (
                    <div className="flex gap-3 mt-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-semibold hover:underline ${isLight ? "text-sky-600" : "text-sky-300"}`}
                        >
                          {ui.liveDemo}
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-semibold hover:underline ${isLight ? "text-slate-700" : "text-zinc-300"}`}
                        >
                          {ui.github}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
