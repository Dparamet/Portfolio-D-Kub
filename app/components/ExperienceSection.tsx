"use client";

import type { CSSProperties } from "react";
import { FaBriefcase, FaCode, FaExternalLinkAlt, FaStore } from "react-icons/fa";

import { useSitePreferences } from "@/app/components/SitePreferencesProvider";
import {
  experiences,
  type ExperienceCategory,
} from "@/data/experiences";
import { getRevealDelay } from "@/lib/motion";

const categoryIcons: Record<ExperienceCategory, React.ReactNode> = {
  Leadership: <FaBriefcase aria-hidden="true" />,
  Development: <FaCode aria-hidden="true" />,
  Service: <FaStore aria-hidden="true" />,
};

export default function ExperienceSection() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";

  const text = isThai
    ? {
        title: "ประสบการณ์ทำงาน",
        subtitle:
          "ประสบการณ์จากงาน Freelance การพัฒนาระบบจริง และงานบริการที่ช่วยเสริมทักษะการทำงาน",
        view: "ดูผลงาน",
      }
    : {
        title: "Work Experience",
        subtitle:
          "Freelance, production development, and service experience that shaped how I work.",
        view: "View work",
      };

  return (
    <section
      id="experience"
      className={`scroll-mt-16 px-6 py-20 md:px-20 ${
        isLight ? "bg-white" : "bg-black"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <p className="section-index mb-1">03 · {text.title.toUpperCase()}</p>
          <h2
            className={`mb-3 text-4xl font-bold md:text-5xl ${
              isLight ? "text-slate-900" : "text-zinc-100"
            }`}
          >
            {text.title}
          </h2>
          <div className="accent-bar mb-4" />
          <p
            className={`mb-10 max-w-3xl ${
              isLight ? "text-slate-600" : "text-zinc-300"
            }`}
          >
            {text.subtitle}
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className={`absolute bottom-5 left-4 top-5 w-px md:left-6 ${
              isLight ? "bg-sky-300" : "bg-sky-400/50"
            }`}
          />

          <ol className="space-y-5" aria-label={text.title}>
            {experiences.map((item, index) => {
            const organization = isThai
              ? item.organizationTH
              : item.organization;
            const role = isThai ? item.roleTH : item.role;
            const period = isThai ? item.periodTH : item.period;
            const description = isThai
              ? item.descriptionTH
              : item.description;

            return (
              <li
                key={item.id}
                className="relative pl-12 md:pl-20"
                data-reveal
                style={
                  { "--reveal-delay": getRevealDelay(index) } as CSSProperties
                }
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-md border text-xs md:left-1 md:h-11 md:w-11 md:text-sm ${
                    isLight
                      ? "border-sky-300 bg-sky-50 text-sky-600"
                      : "border-sky-400/40 bg-sky-400/10 text-sky-300"
                  }`}
                >
                  {categoryIcons[item.category]}
                </span>

                <article
                  className={`motion-card rounded-md border p-5 md:p-6 ${
                    isLight
                      ? "border-slate-200 bg-slate-50 hover:border-sky-300"
                      : "border-zinc-800 bg-zinc-900 hover:border-sky-400/50"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3
                        className={`text-lg font-bold leading-snug ${
                          isLight ? "text-slate-900" : "text-zinc-100"
                        }`}
                      >
                        {organization}
                      </h3>
                      <p
                        className={`mt-1 text-sm font-medium ${
                          isLight ? "text-sky-700" : "text-sky-300"
                        }`}
                      >
                        {role}
                      </p>
                    </div>

                    <time
                      className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${
                        isLight
                          ? "border-sky-200 bg-white text-sky-700"
                          : "border-sky-400/30 bg-sky-400/10 text-sky-300"
                      }`}
                    >
                      {period}
                    </time>
                  </div>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      isLight ? "text-slate-600" : "text-zinc-300"
                    }`}
                  >
                    {description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded border px-2 py-1 text-[11px] font-medium ${
                          isLight
                            ? "border-slate-200 bg-white text-slate-700"
                            : "border-zinc-700 bg-zinc-950 text-zinc-300"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ml-auto inline-flex items-center gap-1.5 text-xs font-semibold hover:underline ${
                          isLight ? "text-sky-700" : "text-sky-300"
                        }`}
                      >
                        {text.view}
                        <FaExternalLinkAlt aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </li>
            );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
