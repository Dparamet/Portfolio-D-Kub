// ============================================================
//  SKILLS DATA
//  Add a new skill category object, or add items to existing ones
// ============================================================

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vanilla JS"],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "REST APIs", "Git", "GitHub"],
  },
  {
    category: "Other Interests",
    items: ["IoT", "Arduino", "Figma"],
  },
  // ── HOW TO ADD A NEW GROUP ───────────────────────────────
  // {
  //   category: "Databases",
  //   items: ["PostgreSQL", "MongoDB", "SQLite"],
  // },
  // ────────────────────────────────────────────────────────
];
