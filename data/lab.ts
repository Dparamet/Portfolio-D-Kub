// ============================================================
//  THE LAB DATA
//  Mini-projects / experiments.
//  To add one — copy a block and fill it in.
//  "category" controls the filter tabs.
// ============================================================

export type LabStatus = "Live" | "In Progress" | "Coming Soon";

export interface LabProject {
  id: number;
  title: string;
  description: string;
  tech: string;        // primary tech label shown on the card
  status: LabStatus;
  category: string;   // e.g. "Vanilla JS", "React", "Python"
  link?: string;       // optional: live demo or repo URL
}

export const labProjects: LabProject[] = [
  {
    id: 1,
    title: "Calculator",
    description: "A clean calculator built with pure Vanilla JS — no frameworks, just raw logic.",
    tech: "Vanilla JS",
    status: "Coming Soon",
    category: "Vanilla JS",
  },
  {
    id: 2,
    title: "Todo List",
    description: "A simple todo app with local storage persistence, add/remove/complete tasks.",
    tech: "Vanilla JS",
    status: "Coming Soon",
    category: "Vanilla JS",
  },

  // ── HOW TO ADD A NEW LAB PROJECT ────────────────────────
  // {
  //   id: 3,
  //   title: "Weather Widget",
  //   description: "Fetches live weather data from OpenWeatherMap API.",
  //   tech: "React",
  //   status: "Live",               // "Live" | "In Progress" | "Coming Soon"
  //   category: "React",
  //   link: "https://weather.yoursite.com",
  // },
  // ────────────────────────────────────────────────────────
];

// Status → badge colour mapping
export const labStatusColors: Record<LabStatus, string> = {
  "Live":         "bg-sky-500/20 text-sky-200 border border-sky-400/40",
  "In Progress":  "bg-blue-500/20 text-blue-200 border border-blue-400/40",
  "Coming Soon":  "bg-zinc-800 text-zinc-300 border border-zinc-700",
};

// Category → card accent colour mapping
// Add a new entry if you create a project with a brand-new category
export const labCategoryColors: Record<string, { card: string; tag: string }> = {
  "Vanilla JS": { card: "border-sky-500/30 hover:border-sky-400/70",  tag: "bg-sky-500/15 text-sky-200 border-sky-500/35" },
  "React":      { card: "border-cyan-500/30 hover:border-cyan-400/70", tag: "bg-cyan-500/15 text-cyan-200 border-cyan-500/35" },
  "Python":     { card: "border-blue-500/30 hover:border-blue-400/70", tag: "bg-blue-500/15 text-blue-200 border-blue-500/35" },
  "default":    { card: "border-zinc-700 hover:border-sky-500/60", tag: "bg-zinc-800 text-zinc-200 border-zinc-700" },
};
