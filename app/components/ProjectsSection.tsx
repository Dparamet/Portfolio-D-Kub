"use client";

import { useState } from "react";
import { FaBook, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

// ── Language colours (same as GitHub) ────────────────────────
const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#3178c6",
  JavaScript:  "#f1e05a",
  Python:      "#3572A5",
  Java:        "#b07219",
  PHP:         "#4F5D95",
  HTML:        "#e34c26",
  CSS:         "#563d7c",
  Luau:        "#00A2FF",
  "C++":       "#f34b7d",
  C:           "#555555",
  WordPress:   "#21759b",
  "Next.js":   "#000000",
  React:       "#61dafb",
};

const LANG_ORDER = [
  "TypeScript","JavaScript","Python","Java","PHP",
  "HTML","Luau","CSS","C++","C","Next.js","React","WordPress",
];

function getPrimaryLang(tech: string[]): string | null {
  return (
    LANG_ORDER.find((l) =>
      tech.some((t) => t.toLowerCase() === l.toLowerCase())
    ) ?? null
  );
}

// ── i18n ─────────────────────────────────────────────────────
const categoryTH: Record<string, string> = {
  All: "ทั้งหมด", Web: "เว็บ", IoT: "ไอโอที",
  Mobile: "มือถือ", Python: "ไพธอน", Java: "จาวา",
  Work: "งาน", javaScript: "จาวาสคริปต์",
};

const statusTH: Record<string, string> = {
  Completed: "เสร็จแล้ว",
  "In Progress": "กำลังพัฒนา",
  "Coming Soon": "เร็ว ๆ นี้",
};

// ── Status badge colours ──────────────────────────────────────
const STATUS_DARK: Record<string, string> = {
  Completed:     "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30",
  "In Progress": "bg-yellow-500/15  text-yellow-400  ring-1 ring-yellow-400/30",
  "Coming Soon": "bg-zinc-700       text-zinc-400    ring-1 ring-zinc-600",
};
const STATUS_LIGHT: Record<string, string> = {
  Completed:     "bg-emerald-50  text-emerald-700 ring-1 ring-emerald-300",
  "In Progress": "bg-yellow-50   text-yellow-700  ring-1 ring-yellow-300",
  "Coming Soon": "bg-slate-100   text-slate-600   ring-1 ring-slate-300",
};

export default function ProjectsSection() {
  const { language, theme } = useSitePreferences();
  const isThai   = language === "th";
  const isLight  = theme   === "light";

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const tabs = [
    { label: "All",  count: projects.length },
    ...categories.map((c) => ({ label: c, count: projects.filter((p) => p.category === c).length })),
  ];

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const label = (key: string) => (isThai ? (categoryTH[key] ?? key) : key);

  // ── Section & card colours (GitHub palette) ───────────────
  const pageBg   = isLight ? "bg-[#f6f8fa]"  : "bg-[#0d1117]";
  const cardBg   = isLight ? "bg-white"       : "bg-[#161b22]";
  const cardBorder = isLight ? "border-[#d0d7de] hover:border-[#0969da]/40" : "border-[#30363d] hover:border-[#58a6ff]/40";
  const nameColor  = isLight ? "text-[#0969da]" : "text-[#58a6ff]";
  const descColor  = isLight ? "text-[#57606a]" : "text-[#8b949e]";
  const metaColor  = isLight ? "text-[#57606a]" : "text-[#8b949e]";
  const topicBg    = isLight
    ? "bg-[#ddf4ff] text-[#0969da] ring-1 ring-[#54aeff]/40 hover:bg-[#b6e3ff]"
    : "bg-transparent text-[#58a6ff] ring-1 ring-[#1f6feb] hover:bg-[#1f6feb]/20";
  const dividerColor = isLight ? "border-[#d0d7de]" : "border-[#30363d]";
  const iconColor    = isLight ? "text-[#57606a]" : "text-[#8b949e]";

  return (
    <section
      id="projects"
      className={`scroll-mt-16 py-20 px-6 md:px-20 ${pageBg}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className={`text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-[#e6edf3]"}`}>
          {isThai ? "ผลงาน" : "Projects"}
        </h2>
        <div className="w-16 h-1 bg-sky-400 rounded mb-4" />
        <p className={`mb-8 ${descColor}`}>
          {isThai ? "ตัวอย่างงานที่ผมพัฒนาและกำลังทำอยู่" : "Things I've built or am currently working on."}
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              aria-pressed={active === tab.label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                active === tab.label
                  ? isLight
                    ? "bg-[#0969da] text-white"
                    : "bg-[#58a6ff] text-[#0d1117]"
                  : isLight
                    ? "bg-white text-[#57606a] ring-1 ring-[#d0d7de] hover:ring-[#0969da]/50"
                    : "bg-transparent text-[#8b949e] ring-1 ring-[#30363d] hover:ring-[#58a6ff]/50 hover:text-[#e6edf3]"
              }`}
            >
              {label(tab.label)}
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                  active === tab.label
                    ? isLight ? "bg-white/25 text-white" : "bg-[#0d1117]/30 text-[#0d1117]"
                    : isLight ? "bg-[#eaeef2] text-[#57606a]" : "bg-[#21262d] text-[#8b949e]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className={`rounded-md border border-dashed p-8 text-center ${isLight ? "border-[#d0d7de] text-[#57606a]" : "border-[#30363d] text-[#8b949e]"}`}>
            {isThai ? `ยังไม่มีผลงานในหมวด "${label(active)}"` : `No projects in "${label(active)}" yet.`}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const lang = getPrimaryLang(project.tech);
              const langColor = lang ? (LANG_COLORS[lang] ?? "#8b949e") : null;
              const statusDark  = STATUS_DARK[project.status]  ?? STATUS_DARK["Coming Soon"];
              const statusLight = STATUS_LIGHT[project.status] ?? STATUS_LIGHT["Coming Soon"];
              // Show max 3 tech topics
              const topics = project.tech.slice(0, 3);

              return (
                <div
                  key={project.id}
                  className={`flex flex-col rounded-md border p-4 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md ${cardBg} ${cardBorder}`}
                >
                  {/* Row 1: icon + name + status */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FaBook className={`shrink-0 text-sm ${iconColor}`} />
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-semibold text-sm truncate hover:underline ${nameColor}`}
                        >
                          {project.title}
                        </a>
                      ) : (
                        <span className={`font-semibold text-sm truncate ${nameColor}`}>
                          {project.title}
                        </span>
                      )}
                      <span
                        className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full ring-1 font-medium ${
                          isLight
                            ? "text-[#57606a] ring-[#d0d7de]"
                            : "text-[#8b949e] ring-[#30363d]"
                        }`}
                      >
                        Public
                      </span>
                    </div>
                    <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${isLight ? statusLight : statusDark}`}>
                      {isThai ? (statusTH[project.status] ?? project.status) : project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${descColor}`}>
                    {project.description}
                  </p>

                  {/* Topics (tech tags) */}
                  {topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {topics.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${topicBg}`}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${topicBg}`}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Footer: language + links */}
                  <div className={`flex items-center justify-between pt-3 border-t ${dividerColor}`}>
                    {/* Language dot */}
                    <div className="flex items-center gap-3">
                      {lang && langColor && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: langColor }}
                          />
                          <span className={`text-xs ${metaColor}`}>{lang}</span>
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 text-xs hover:underline ${nameColor}`}
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          {isThai ? "ดูผลงาน" : "Live"}
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 text-xs hover:underline ${metaColor}`}
                        >
                          <FaCodeBranch className="text-[10px]" />
                          Repo
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
