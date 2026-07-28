// =============================================================================
// SOFT SKILLS + HOBBY CONTENT
// Used by: app/components/LabSection.tsx
// Image folder: /public/soft-skills/ -> "/soft-skills/file.webp"
// Full guide: data/README.md
// =============================================================================

export type SoftSkillLevel = "Strong" | "Growing" | "Practice";

export interface SoftSkillItem {
  id: number;
  title: string;
  titleTH: string;
  description: string;
  descriptionTH: string;
  focus: string;
  focusTH: string;
  level: SoftSkillLevel;
  category: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "center" | "top";
  link?: string;
}

// -----------------------------------------------------------------------------
// EDIT SOFT SKILL CARDS HERE
// Required: id, title, titleTH, description, descriptionTH, focus, focusTH,
// level, category
// Optional: image, imageAlt, imagePosition, link
// -----------------------------------------------------------------------------
export const softSkills: SoftSkillItem[] = [
  {
    id: 1,
    title: "Clear Communication",
    titleTH: "การสื่อสารอย่างชัดเจน",
    description:
      "Communicated directly with faculty, teammates, and diverse customers to clarify requirements and maintain service quality.",
    descriptionTH:
      "สื่อสารกับอาจารย์ ทีมงาน และลูกค้าหลากหลายกลุ่ม เพื่อเก็บความต้องการ ลดความคลาดเคลื่อน และรักษาคุณภาพงาน",
    focus: "Stakeholder Communication",
    focusTH: "การสื่อสารกับผู้มีส่วนเกี่ยวข้อง",
    level: "Strong",
    category: "Communication",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 2,
    title: "Team Collaboration",
    titleTH: "การทำงานร่วมกับทีม",
    description:
      "Coordinated a five-member development team and established shared Git workflows for reliable collaboration.",
    descriptionTH:
      "ประสานทีมพัฒนา 5 คน และวาง Git Workflow ร่วมกัน เพื่อให้งานต่อเนื่อง ตรวจสอบได้ และลดความขัดแย้งของโค้ด",
    focus: "Git Workflow",
    focusTH: "การทำงานด้วย Git",
    level: "Strong",
    category: "Teamwork",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 3,
    title: "Problem Solving Mindset",
    titleTH: "แนวคิดการแก้ปัญหา",
    description:
      "Translate requirements into scalable solutions, from offline-ready POS data to low-latency IoT monitoring.",
    descriptionTH:
      "วิเคราะห์ความต้องการก่อนออกแบบโซลูชัน ตั้งแต่ข้อมูล POS แบบออฟไลน์จนถึงระบบ IoT แบบเรียลไทม์",
    focus: "Solution Architecture",
    focusTH: "สถาปัตยกรรมโซลูชัน",
    level: "Strong",
    category: "Problem Solving",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 4,
    title: "Ownership & Initiative",
    titleTH: "ความรับผิดชอบและความริเริ่ม",
    description:
      "Led projects from requirement analysis and architecture through implementation, quality standards, and delivery.",
    descriptionTH:
      "ดูแลโครงการตั้งแต่เก็บความต้องการ ออกแบบระบบ พัฒนา กำหนดคุณภาพ ไปจนถึงส่งมอบงานตามเป้าหมาย",
    focus: "Project Leadership",
    focusTH: "ภาวะผู้นำโครงการ",
    level: "Growing",
    category: "Leadership",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 5,
    title: "Adaptability",
    titleTH: "การปรับตัว",
    description:
      "Adapt across full-stack web development, WordPress, POS workflows, customer operations, and embedded systems.",
    descriptionTH:
      "ปรับตัวกับงานหลากหลาย ทั้ง Full-Stack, WordPress, ระบบ POS, งานบริการลูกค้า และระบบสมองกลฝังตัว",
    focus: "Cross-Functional Work",
    focusTH: "การทำงานข้ามสายงาน",
    level: "Growing",
    category: "Teamwork",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 6,
    title: "Gaming",
    titleTH: "การเล่นเกม",
    description: "Gaming sharpens strategy, decision-making under pressure, and pattern recognition.",
    descriptionTH:
      "ฝึกการวางกลยุทธ์ การตัดสินใจภายใต้แรงกดดัน และการสังเกตรูปแบบ เพื่อนำมาปรับใช้กับการแก้ปัญหา",
    focus: "Strategy",
    focusTH: "กลยุทธ์",
    level: "Practice",
    category: "Hobby",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 7,
    title: "Anime",
    titleTH: "อนิเมะ",
    description: "Anime inspires storytelling ideas, creativity, and perspective in design thinking.",
    descriptionTH:
      "เรียนรู้มุมมองการเล่าเรื่อง ความคิดสร้างสรรค์ และองค์ประกอบภาพ เพื่อนำแรงบันดาลใจมาพัฒนางานออกแบบ",
    focus: "Creativity",
    focusTH: "ความคิดสร้างสรรค์",
    level: "Practice",
    category: "Hobby",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 8,
    title: "Self Improvement",
    titleTH: "การพัฒนาตนเอง",
    description: "Daily habit of learning, reflection, and continuous growth in both life and coding.",
    descriptionTH:
      "เรียนรู้ ทบทวน และพัฒนาตนเองอย่างสม่ำเสมอ ทั้งด้านการใช้ชีวิต การทำงานร่วมกับผู้อื่น และการเขียนโปรแกรม",
    focus: "Consistency",
    focusTH: "ความสม่ำเสมอ",
    level: "Growing",
    category: "Hobby",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 9,
    title: "Time Management",
    titleTH: "การบริหารเวลา",
    description:
      "Managed strict delivery schedules while balancing university study, freelance projects, and operational responsibilities.",
    descriptionTH:
      "จัดลำดับความสำคัญระหว่างการเรียน งาน Freelance และงานปฏิบัติการ เพื่อส่งมอบแต่ละหน้าที่ได้ตรงเวลา",
    focus: "Prioritization",
    focusTH: "การจัดลำดับความสำคัญ",
    level: "Strong",
    category: "Leadership",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 10,
    title: "Customer Service & Operations",
    titleTH: "บริการลูกค้าและงานปฏิบัติการ",
    description:
      "Served diverse customers, supported branch operations, and assisted with preliminary stock preparation at 7-Eleven.",
    descriptionTH:
      "ให้บริการลูกค้าหลากหลายกลุ่ม สนับสนุนงานภายในสาขา และช่วยเตรียมสต็อกเบื้องต้น เพื่อรักษาคุณภาพบริการ",
    focus: "Service Quality",
    focusTH: "คุณภาพการบริการ",
    level: "Strong",
    category: "Communication",
    image: "/profile.jpg",
    imageAlt: "Dparamet practicing continuous self improvement",
    imagePosition: "center",
  },
  {
    id: 11,
    title: "Territorial Defense Student Battalion Commander",
    titleTH: "ผู้บังคับกองพัน รด.",
    description:
      "Developed advanced leadership, discipline, and endurance while overseeing nearly 200 cadets through respectful, calm, and approachable command.",
    descriptionTH:
      "ฝึกภาวะผู้นำระดับกองพัน ความอดทน และวินัย พร้อมควบคุมดูแลกำลังพลเกือบ 200 นายด้วยแนวทางที่สันติ เป็นกันเอง และให้เกียรติ",
    focus: "Advanced Leadership",
    focusTH: "ภาวะผู้นำขั้นสูง",
    level: "Strong",
    category: "Leadership",
    image: "/softskills/Battalion Commander.webp",
    imageAlt: "Territorial Defense Student serving as battalion commander",
    imagePosition: "center",
  },
  {
    id: 12,
    title: "Territorial Defense Student Company Commander",
    titleTH: "ผู้บังคับกองร้อย รด.",
    description:
      "Strengthened leadership, discipline, and endurance while coordinating two platoons and supervising approximately 100 cadets.",
    descriptionTH:
      "ฝึกภาวะผู้นำ ความอดทน และวินัย ผ่านการควบคุมดูแลกำลังพลประมาณ 100 นาย ซึ่งประกอบด้วยหมวด 1 และหมวด 2 อย่างเป็นระบบ",
    focus: "Unit Coordination",
    focusTH: "การประสานงานระดับหน่วย",
    level: "Strong",
    category: "Leadership",
    image: "/softskills/Territorial Defense Student Company Commander.webp",
    imageAlt: "Territorial Defense Student serving as company commander",
    imagePosition: "center",
  },
  {
    id: 13,
    title: "Territorial Defense Student Platoon Leader",
    titleTH: "ผู้บังคับหมวด รด.",
    description:
      "Earned the trust of peers and instructors to lead approximately 50 cadets, building cooperation, respect, and unity through calm leadership.",
    descriptionTH:
      "ได้รับความไว้วางใจจากเพื่อนและครูฝึกให้ดูแลกำลังพลประมาณ 50 นาย โดยใช้ภาวะผู้นำที่สันติและเป็นกันเอง จนเกิดความร่วมมือ ความเคารพ และความสามัคคี",
    focus: "Trust & Unity",
    focusTH: "ความไว้วางใจและความสามัคคี",
    level: "Strong",
    category: "Leadership",
    image: "/softskills/Territorial Defense Student Platoon Leader.webp",
    imageAlt: "Territorial Defense Student serving as platoon leader",
    imagePosition: "center",
  },

  // ===========================================================================
  // HOW TO ADD A NEW SOFT SKILL CARD
  // Copy this block, paste it above this guide, then edit the values.
  // ===========================================================================
  // {
  //   id: 14, // required, must be unique
  //   title: "Time Management",
  //   titleTH: "การบริหารเวลา",
  //   description: "How this skill helps you work or build projects.",
  //   descriptionTH: "ทักษะนี้ช่วยให้ทำงานหรือพัฒนาโครงการได้อย่างไร",
  //   focus: "Prioritization", // short badge text
  //   focusTH: "การจัดลำดับความสำคัญ",
  //   level: "Growing", // "Strong" | "Growing" | "Practice"
  //   category: "Leadership", // automatically becomes a filter tab
  //
  //   // Optional image fields — use all image fields together
  //   image: "/soft-skills/time-management.webp",
  //   imageAlt: "Planning tasks and priorities on a desk",
  //   imagePosition: "center", // "top" | "center"
  //
  //   // Optional external URL
  //   link: "https://example.com",
  // },
];
