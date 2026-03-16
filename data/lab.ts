// ============================================================
//  SOFT SKILLS + HOBBY DATA
//  Cards used in the Soft Skill section.
//  "category" controls the filter tabs.
// ============================================================

export type SoftSkillLevel = "Strong" | "Growing" | "Practice";

export interface SoftSkillItem {
  id: number;
  title: string;
  description: string;
  focus: string; // badge shown on each card
  level: SoftSkillLevel;
  category: string; // e.g. "Communication", "Teamwork", "Hobby"
  link?: string;
}

export const softSkills: SoftSkillItem[] = [
  {
    id: 1,
    title: "Clear Communication",
    description: "I explain ideas with simple language and keep updates clear for teammates.",
    focus: "Active Listening",
    level: "Strong",
    category: "Communication",
  },
  {
    id: 2,
    title: "Team Collaboration",
    description: "Comfortable working in team workflows, sharing progress, and helping solve blockers.",
    focus: "Agile Teamwork",
    level: "Strong",
    category: "Teamwork",
  },
  {
    id: 3,
    title: "Problem Solving Mindset",
    description: "I enjoy debugging and finding root causes before implementing reliable fixes.",
    focus: "Root Cause",
    level: "Strong",
    category: "Problem Solving",
  },
  {
    id: 4,
    title: "Ownership & Initiative",
    description: "I take responsibility for tasks and keep moving forward without waiting to be told.",
    focus: "Ownership",
    level: "Growing",
    category: "Leadership",
  },
  {
    id: 5,
    title: "Adaptability",
    description: "Quick to adjust when requirements change and open to new tools or approaches.",
    focus: "Flexibility",
    level: "Growing",
    category: "Teamwork",
  },
  {
    id: 6,
    title: "Gaming",
    description: "Gaming sharpens strategy, decision-making under pressure, and pattern recognition.",
    focus: "Strategy",
    level: "Practice",
    category: "Hobby",
  },
  {
    id: 7,
    title: "Anime",
    description: "Anime inspires storytelling ideas, creativity, and perspective in design thinking.",
    focus: "Creativity",
    level: "Practice",
    category: "Hobby",
  },
  {
    id: 8,
    title: "Self Improvement",
    description: "Daily habit of learning, reflection, and continuous growth in both life and coding.",
    focus: "Consistency",
    level: "Growing",
    category: "Hobby",
  },
];

// Level → badge colour mapping (dark mode)
export const softSkillLevelColors: Record<SoftSkillLevel, string> = {
  "Strong": "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40",
  "Growing": "bg-blue-500/20 text-blue-200 border border-blue-400/40",
  "Practice": "bg-zinc-800 text-zinc-300 border border-zinc-700",
};

// Category → card accent colour mapping
export const softSkillCategoryColors: Record<string, { card: string; tag: string }> = {
  "Communication": { card: "border-sky-500/30 hover:border-sky-400/70", tag: "bg-sky-500/15 text-sky-200 border-sky-500/35" },
  "Teamwork": { card: "border-cyan-500/30 hover:border-cyan-400/70", tag: "bg-cyan-500/15 text-cyan-200 border-cyan-500/35" },
  "Problem Solving": { card: "border-blue-500/30 hover:border-blue-400/70", tag: "bg-blue-500/15 text-blue-200 border-blue-500/35" },
  "Leadership": { card: "border-indigo-500/30 hover:border-indigo-400/70", tag: "bg-indigo-500/15 text-indigo-200 border-indigo-500/35" },
  "Hobby": { card: "border-pink-500/30 hover:border-pink-400/70", tag: "bg-pink-500/15 text-pink-200 border-pink-500/35" },
  "default": { card: "border-zinc-700 hover:border-sky-500/60", tag: "bg-zinc-800 text-zinc-200 border-zinc-700" },
};
