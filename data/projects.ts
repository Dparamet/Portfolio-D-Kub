// ============================================================
//  PROJECTS DATA
//  To add a new project — copy one block below and fill it in.
//  "category" controls the filter tabs shown on the page.
// ============================================================

export type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  category: string;   // shown as a filter tab  e.g. "Web", "IoT", "Mobile"
  link?: string;      // optional: live demo URL
  repo?: string;      // optional: GitHub repo URL
  gradient: string;   // Tailwind gradient classes for the card thumbnail
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce platform with product listings, cart, and checkout flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    category: "Web",
    gradient: "from-sky-600 to-slate-700",
  },
  {
    id: 2,
    title: "IoT Dashboard",
    description:
      "A real-time dashboard for monitoring IoT sensor data with live charts and alerts.",
    tech: ["React", "Node.js", "IoT", "MQTT"],
    status: "Coming Soon",
    category: "IoT",
    gradient: "from-slate-700 to-zinc-950",
  },

  // ── HOW TO ADD A NEW PROJECT ─────────────────────────────
  // {
  //   id: 3,
  //   title: "My New App",
  //   description: "Short description of what it does.",
  //   tech: ["React", "Firebase"],
  //   status: "Completed",          // "Completed" | "In Progress" | "Coming Soon"
  //   category: "Mobile",           // any string — auto-appears as a filter tab
  //   link: "https://myapp.vercel.app",
  //   repo: "https://github.com/you/myapp",
  //   gradient: "from-amber-200 to-orange-100",
  // },
  // ────────────────────────────────────────────────────────
];

// Status → badge colour mapping (add new statuses here if needed)
export const statusColors: Record<ProjectStatus, string> = {
  "Completed":   "bg-sky-500/20 text-sky-200 border border-sky-400/40",
  "In Progress": "bg-blue-500/20 text-blue-200 border border-blue-400/40",
  "Coming Soon": "bg-zinc-800 text-zinc-300 border border-zinc-700",
};
