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
  {
    id: 14,
    title: "Autonomous Vision Robot Competition",
    titleTH: "การแข่งขันหุ่นยนต์เคลื่อนที่ด้วยระบบ Vision",
    description:
      "Competed at the 17th RMUTI National Academic Fair, building an autonomous mobile robot with a vision-guided arm and solving hardware and software problems as a team.",
    descriptionTH:
      "แข่งขันในงานราชมงคลวิชาการระดับชาติ ครั้งที่ 17 พัฒนาหุ่นยนต์เคลื่อนที่พร้อมแขนกลควบคุมด้วยระบบ Vision และแก้ปัญหาทั้งฮาร์ดแวร์และซอฟต์แวร์ร่วมกับทีม",
    focus: "Robotics · Computer Vision",
    focusTH: "หุ่นยนต์ · คอมพิวเตอร์วิชัน",
    level: "Strong",
    category: "Competition",
    image: "/competitions/robot-vision.webp",
    imageAlt: "Vision-guided mobile robot at the RMUTI national academic fair",
    imagePosition: "center",
  },
  {
    id: 15,
    title: "National Skills Competition #31 — Cybersecurity",
    titleTH: "การแข่งขันฝีมือแรงงานแห่งชาติ ครั้งที่ 31 — Cybersecurity",
    description:
      "Passed the online round as one of 7 Northeastern teams, then represented the region at the national final in the cybersecurity team category under time pressure.",
    descriptionTH:
      "ผ่านรอบออนไลน์เป็น 1 ใน 7 ทีมภาคอีสาน และเป็นตัวแทนภาคไปแข่งขันรอบชิงชนะเลิศระดับประเทศ ประเภททีม ภายใต้เวลาจำกัด",
    focus: "Regional finalist → National",
    focusTH: "ตัวแทนภาคอีสาน สู่ระดับประเทศ",
    level: "Strong",
    category: "Competition",
    image: "/competitions/cybersecurity.webp",
    imageAlt: "Cybersecurity competition team with their advisor",
    imagePosition: "center",
  },
  {
    id: 16,
    title: "INNOBIZ IGNITE — Business Plan Competition",
    titleTH: "INNOBIZ IGNITE การประกวดแผนธุรกิจ",
    description:
      "Team CARELINK placed in the Top 4 and won a consolation prize, working across Engineering, Marketing, and Education to move an innovation toward market.",
    descriptionTH:
      "ทีม CARELINK ได้ Top 4 และรางวัลชมเชย (เงินรางวัล 1,000 บาท) ทำงานร่วมกับสายวิศวกรรม การตลาด และการศึกษา เพื่อผลักดันนวัตกรรมสู่ตลาด",
    focus: "Top 4 · Consolation Prize",
    focusTH: "Top 4 · รางวัลชมเชย",
    level: "Strong",
    category: "Competition",
    image: "/competitions/innobiz-carelink.webp",
    imageAlt: "Team CARELINK receiving the INNOBIZ IGNITE consolation prize",
    imagePosition: "center",
  },
  {
    id: 17,
    title: "WordPress Training Workshop",
    titleTH: "อบรมเชิงปฏิบัติการ WordPress",
    description:
      "Served as an assistant instructor for a WordPress workshop, training faculty and staff and pairing technical skill with clear teaching and teamwork.",
    descriptionTH:
      "เป็นผู้ช่วยวิทยากรอบรมการใช้งาน WordPress ให้คณาจารย์และบุคลากร ผสานทักษะเทคนิคเข้ากับการสอนที่เข้าใจง่ายและการทำงานเป็นทีม",
    focus: "Technical Training",
    focusTH: "การอบรมเชิงเทคนิค",
    level: "Strong",
    category: "Communication",
    image: "/competitions/wordpress-workshop.webp",
    imageAlt: "Assisting a WordPress training session for university staff",
    imagePosition: "center",
  },
  {
    id: 18,
    title: "Wai Khru Ceremony — Class Representative",
    titleTH: "พิธีไหว้ครู — ตัวแทนชั้นปี",
    description:
      "Represented the Computer Engineering class as pahn bearer; the team placed 2nd in the pahn-decorating contest, blending teamwork with representation.",
    descriptionTH:
      "เป็นตัวแทนชั้นปีวิศวกรรมคอมพิวเตอร์ถือพานในพิธีไหว้ครู และทีมได้อันดับ 2 การประกวดพาน เน้นการทำงานเป็นทีมและการเป็นตัวแทน",
    focus: "2nd place · Representation",
    focusTH: "อันดับ 2 · ตัวแทนชั้นปี",
    level: "Strong",
    category: "Teamwork",
    image: "/competitions/waikru-phan.webp",
    imageAlt: "Computer Engineering students at the Wai Khru ceremony",
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
