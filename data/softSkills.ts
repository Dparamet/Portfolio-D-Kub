// ============================================================
//  SOFT SKILLS DATA
//  Describes interpersonal and behavioral competencies
// ============================================================

export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  level: number; // 1-10 scale
  color: string; // Tailwind color class
  icon: string;  // emoji or icon name
}

export const softSkills: SoftSkill[] = [
  {
    id: 1,
    name: "Communication",
    description: "Clear and effective verbal and written communication",
    level: 8,
    color: "from-blue-500 to-cyan-500",
    icon: "💬",
  },
  {
    id: 2,
    name: "Teamwork",
    description: "Ability to collaborate and work effectively in teams",
    level: 8,
    color: "from-green-500 to-emerald-500",
    icon: "👥",
  },
  {
    id: 3,
    name: "Problem Solving",
    description: "Analytical thinking and creative solution development",
    level: 8,
    color: "from-purple-500 to-pink-500",
    icon: "🧩",
  },
  {
    id: 4,
    name: "Leadership",
    description: "Ability to guide and inspire teams toward goals",
    level: 7,
    color: "from-amber-500 to-orange-500",
    icon: "🎯",
  },
  {
    id: 5,
    name: "Creativity",
    description: "Innovative thinking and design perspective",
    level: 8,
    color: "from-rose-500 to-red-500",
    icon: "✨",
  },
  {
    id: 6,
    name: "Time Management",
    description: "Efficient planning and task prioritization",
    level: 7,
    color: "from-indigo-500 to-blue-500",
    icon: "⏰",
  },
  {
    id: 7,
    name: "Adaptability",
    description: "Flexibility and ability to handle change",
    level: 8,
    color: "from-teal-500 to-cyan-500",
    icon: "🔄",
  },
  {
    id: 8,
    name: "Attention to Detail",
    description: "Precision and thoroughness in work",
    level: 8,
    color: "from-violet-500 to-purple-500",
    icon: "🔍",
  },
];
