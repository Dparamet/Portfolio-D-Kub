import Image from "next/image";
import { FaStar } from "react-icons/fa";

import type { SoftSkillItem } from "@/data/softskills";

type SoftSkillThumbnailProps = {
  item: Pick<
    SoftSkillItem,
    | "title"
    | "titleTH"
    | "focus"
    | "focusTH"
    | "category"
    | "image"
    | "imageAlt"
    | "imagePosition"
  >;
  isLight: boolean;
  isThai: boolean;
};

const categoryGradients: Record<string, string> = {
  Communication: "from-sky-500 to-blue-700",
  Teamwork: "from-cyan-500 to-teal-700",
  "Problem Solving": "from-blue-600 to-slate-800",
  Leadership: "from-indigo-500 to-blue-800",
  Hobby: "from-pink-500 to-rose-700",
  default: "from-slate-600 to-zinc-800",
};

export default function SoftSkillThumbnail({
  item,
  isLight,
  isThai,
}: SoftSkillThumbnailProps) {
  const title = isThai ? item.titleTH : item.title;
  const focus = isThai ? item.focusTH : item.focus;
  const gradient =
    categoryGradients[item.category] ?? categoryGradients.default;

  return (
    <div
      className={`relative aspect-video overflow-hidden border-b ${
        isLight
          ? "border-[#d0d7de] bg-[#f6f8fa]"
          : "border-[#30363d] bg-[#0d1117]"
      }`}
    >
      {item.image ? (
        <>
          <Image
            src={item.image}
            alt={item.imageAlt ?? `${title} photo`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            unoptimized={item.image.toLowerCase().endsWith(".svg")}
            className={`object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02] ${
              item.imagePosition === "top" ? "object-top" : "object-center"
            }`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className={`flex h-full items-center justify-center bg-gradient-to-br ${gradient}`}
        >
          <div className="flex max-w-[80%] flex-col items-center gap-3 text-center text-white/95">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/15 backdrop-blur-sm">
              <FaStar className="text-lg" />
            </span>
            <span className="truncate text-xs font-semibold tracking-wide">
              {focus}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
