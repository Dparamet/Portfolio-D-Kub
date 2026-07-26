import Image from "next/image";
import { FaCode } from "react-icons/fa";

import type { Project } from "@/data/projects";

// Project image and gradient fallback UI.
// Image paths and alt text are configured in data/projects.ts.

type ProjectThumbnailProps = {
  project: Pick<Project, "title" | "tech" | "gradient" | "image" | "imageAlt">;
  isLight: boolean;
};

export default function ProjectThumbnail({
  project,
  isLight,
}: ProjectThumbnailProps) {
  const isSvg = project.image?.toLowerCase().endsWith(".svg") ?? false;

  return (
    <div
      className={`relative aspect-video overflow-hidden border-b ${
        isLight ? "border-[#d0d7de] bg-[#f6f8fa]" : "border-[#30363d] bg-[#0d1117]"
      }`}
    >
      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            unoptimized={isSvg}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className={`flex h-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
        >
          <div className="flex flex-col items-center gap-3 text-white/90">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/15 backdrop-blur-sm">
              <FaCode className="text-xl" />
            </span>
            <span className="max-w-[80%] truncate text-xs font-semibold tracking-wide">
              {project.tech.slice(0, 2).join(" · ")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
