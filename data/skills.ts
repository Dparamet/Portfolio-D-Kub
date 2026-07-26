// =============================================================================
// SKILLS CONTENT
// Used by: Skills area inside the About section in app/page.tsx
// Full guide: data/README.md
// =============================================================================

export interface SkillGroup {
  category: string;
  items: string[];
}

// -----------------------------------------------------------------------------
// EDIT SKILL GROUPS HERE
// -----------------------------------------------------------------------------
export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["C", "Java", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "Tailwind CSS", "React", "Spring Boot", "Vite"],
  },
  {
    category: "Development Tools",
    items: ["VS Code", "Git", "GitHub", "Vercel", "Postman", "XAMPP", "Figma"],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "Supabase RLS", "CRM Integration", "Offline-Ready Data"],
  },
  {
    category: "Hardware & Embedded",
    items: ["ESP32", "Arduino", "Sensors Integration", "Embedded Systems"],
  },
  // ===========================================================================
  // HOW TO ADD A NEW SKILL GROUP
  // Copy this block, paste it above this guide, then edit the values.
  // ===========================================================================
  // {
  //   category: "Databases",
  //   items: ["PostgreSQL", "MongoDB", "SQLite"],
  // },
];
