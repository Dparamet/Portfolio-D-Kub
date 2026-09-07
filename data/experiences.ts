// =============================================================================
// WORK EXPERIENCE CONTENT
// Used by: app/components/ExperienceSection.tsx
// Full guide: data/README.md
// =============================================================================

export type ExperienceCategory = "Leadership" | "Development" | "Service";

export interface Experience {
  id: number;
  organization: string;
  organizationTH: string;
  role: string;
  roleTH: string;
  period: string;
  periodTH: string;
  description: string;
  descriptionTH: string;
  skills: string[];
  category: ExperienceCategory;
  link?: string;
}

// -----------------------------------------------------------------------------
// EDIT WORK EXPERIENCE HERE
// Keep descriptions concise so the timeline remains easy to scan.
// -----------------------------------------------------------------------------
export const experiences: Experience[] = [
  {
    id: 1,
    organization: "Hardware POS System",
    organizationTH: "ระบบขายหน้าร้านสำหรับฮาร์ดแวร์",
    role: "Freelance Project Lead",
    roleTH: "หัวหน้าโครงการ (Freelance)",
    period: "May 2026 – Present",
    periodTH: "พฤษภาคม 2569 – ปัจจุบัน",
    description:
      "Lead a five-person team designing a hardware POS system with barcode scanning, customer displays, role-based access, and offline-ready records.",
    descriptionTH:
      "นำทีม 5 คนออกแบบและพัฒนาระบบ POS รองรับสแกนบาร์โค้ด จอแสดงผลลูกค้า การกำหนดสิทธิ์พนักงาน และการบันทึกข้อมูลแบบออฟไลน์",
    skills: ["Project Leadership", "Supabase RLS", "Git Workflow", "POS"],
    category: "Leadership",
  },
  {
    id: 2,
    organization: "TRP Powers Plus",
    organizationTH: "TRP Powers Plus",
    role: "Freelance Tech Lead & Full-Stack Developer",
    roleTH: "ผู้นำด้านเทคนิคและนักพัฒนา Full-Stack (Freelance)",
    period: "May 2026 – July 2026",
    periodTH: "พฤษภาคม 2569 – กรกฎาคม 2569",
    description:
      "Led a full-stack landing page from Figma to production, integrating Supabase CRM and Git quality workflows to improve performance and conversion.",
    descriptionTH:
      "นำทีมพัฒนา Landing Page ตั้งแต่ Figma จนเปิดใช้งานจริง เชื่อมต่อ Supabase CRM และกำหนด Git Workflow เพื่อเพิ่มคุณภาพและ Conversion",
    skills: ["Full-Stack", "Supabase CRM", "Figma", "Git"],
    category: "Development",
    link: "https://trppowersplus.com/",
  },
  {
    id: 3,
    organization: "RMUTI Mechanical Engineering",
    organizationTH: "ภาควิชาวิศวกรรมเครื่องกล RMUTI",
    role: "Freelance WordPress Developer & UI Designer",
    roleTH: "นักพัฒนา WordPress และนักออกแบบ UI (Freelance)",
    period: "March 2025 – April 2025",
    periodTH: "มีนาคม 2568 – เมษายน 2568",
    description:
      "Gathered requirements from faculty, designed the UI/UX and content structure, then delivered a custom WordPress site on schedule.",
    descriptionTH:
      "เก็บความต้องการจากคณาจารย์ ออกแบบ UI/UX และโครงสร้างเนื้อหา ก่อนพัฒนาเว็บไซต์ WordPress และส่งมอบตามกำหนด",
    skills: ["WordPress", "Elementor", "UI/UX", "HTML/CSS"],
    category: "Development",
    link: "https://eme.eng.rmuti.ac.th/",
  },
  {
    id: 4,
    organization: "7-Eleven",
    organizationTH: "7-Eleven",
    role: "Part-Time Food Delivery Staff",
    roleTH: "พนักงานส่งอาหาร (Part-Time)",
    period: "March 2025 – May 2025",
    periodTH: "มีนาคม 2568 – พฤษภาคม 2568",
    description:
      "Delivered orders under strict schedules, served diverse customers, supported branch operations, and assisted with preliminary stock preparation.",
    descriptionTH:
      "จัดส่งสินค้าให้ตรงเวลา ดูแลลูกค้าหลากหลายกลุ่ม สนับสนุนงานภายในสาขา และช่วยจัดเตรียมสต็อกสินค้าเบื้องต้น",
    skills: ["Time Management", "Customer Service", "Operations"],
    category: "Service",
  },

  // ===========================================================================
  // HOW TO ADD A NEW EXPERIENCE
  // {
  //   id: 5,
  //   organization: "Company or Project",
  //   organizationTH: "บริษัทหรือโครงการ",
  //   role: "Your Role",
  //   roleTH: "บทบาทของคุณ",
  //   period: "August 2026 – Present",
  //   periodTH: "สิงหาคม 2569 – ปัจจุบัน",
  //   description: "What you did, for whom, and the result.",
  //   descriptionTH: "ระบุว่าทำอะไร ให้ใคร และเกิดผลลัพธ์อย่างไร",
  //   skills: ["Skill A", "Skill B"],
  //   category: "Development", // "Leadership" | "Development" | "Service"
  //   link: "https://example.com", // optional
  // },
  // ===========================================================================
];
