export type SoftSkillCategory =
  | "Communication"
  | "Collaboration"
  | "Leadership"
  | "Problem Solving"
  | "Adaptability";

export type LocalizedText = {
  en: string;
  th: string;
};

export type SoftSkillItem = {
  id: string;
  category: SoftSkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
  title: LocalizedText;
  summary: LocalizedText;
  practicePrompt: LocalizedText;
};

export const softSkills: SoftSkillItem[] = [
  {
    id: "communication-storytelling",
    category: "Communication",
    level: 4,
    title: { en: "Clear Storytelling", th: "เล่าเรื่องให้เข้าใจง่าย" },
    summary: {
      en: "Translate technical ideas into simple language for non-technical people.",
      th: "อธิบายเรื่องเทคนิคให้คนที่ไม่ใช่สายเทคนิคเข้าใจได้ง่าย",
    },
    practicePrompt: {
      en: "Summarize one feature today in 3 short bullets for users.",
      th: "สรุปฟีเจอร์ที่ทำวันนี้เป็น 3 bullet สั้น ๆ สำหรับผู้ใช้",
    },
  },
  {
    id: "collaboration-feedback",
    category: "Collaboration",
    level: 4,
    title: { en: "Feedback Mindset", th: "รับ-ให้ฟีดแบ็กอย่างสร้างสรรค์" },
    summary: {
      en: "Give concrete feedback and turn comments into clear action items.",
      th: "ให้ฟีดแบ็กแบบชัดเจน และแปลงคอมเมนต์เป็นงานที่ลงมือทำได้",
    },
    practicePrompt: {
      en: "Write one PR comment with 'problem + suggestion + example'.",
      th: "ลองเขียนคอมเมนต์ PR แบบ 'ปัญหา + ข้อเสนอ + ตัวอย่าง' 1 ข้อ",
    },
  },
  {
    id: "leadership-ownership",
    category: "Leadership",
    level: 3,
    title: { en: "Ownership", th: "ความเป็นเจ้าของงาน" },
    summary: {
      en: "Track tasks end-to-end and proactively update progress.",
      th: "ติดตามงานตั้งแต่ต้นจนจบ และอัปเดตความคืบหน้าเชิงรุก",
    },
    practicePrompt: {
      en: "Post a concise daily update: done, next, blocker.",
      th: "สรุปอัปเดตประจำวันแบบสั้น: ทำอะไรแล้ว / ต่อไปทำอะไร / ติดอะไร",
    },
  },
  {
    id: "problem-solving-structured",
    category: "Problem Solving",
    level: 5,
    title: { en: "Structured Thinking", th: "คิดเป็นระบบ" },
    summary: {
      en: "Break complex issues into small testable steps before coding.",
      th: "แยกปัญหาซับซ้อนเป็นขั้นเล็ก ๆ ที่ทดสอบได้ก่อนลงมือเขียนโค้ด",
    },
    practicePrompt: {
      en: "Before coding, list 3 hypotheses and test them quickly.",
      th: "ก่อนเขียนโค้ด ลิสต์สมมติฐาน 3 ข้อและทดสอบอย่างรวดเร็ว",
    },
  },
  {
    id: "adaptability-learning-loop",
    category: "Adaptability",
    level: 4,
    title: { en: "Fast Learning Loop", th: "วงจรเรียนรู้ไว" },
    summary: {
      en: "Adapt quickly to new tools and keep documented learning notes.",
      th: "ปรับตัวกับเครื่องมือใหม่ได้ไว และบันทึกสิ่งที่เรียนรู้อย่างเป็นระบบ",
    },
    practicePrompt: {
      en: "Create a 5-line note after trying a new tool today.",
      th: "หลังลองเครื่องมือใหม่วันนี้ เขียนบันทึกสั้น ๆ 5 บรรทัด",
    },
  },
  {
    id: "communication-listening",
    category: "Communication",
    level: 4,
    title: { en: "Active Listening", th: "ฟังเชิงลึก" },
    summary: {
      en: "Ask clarifying questions and reflect back key points before implementation.",
      th: "ถามคำถามให้ชัด และทวนประเด็นสำคัญก่อนเริ่มลงมือทำ",
    },
    practicePrompt: {
      en: "In your next discussion, ask one clarifying question before proposing a fix.",
      th: "ในการคุยครั้งถัดไป ลองถามคำถามให้ชัด 1 ข้อก่อนเสนอวิธีแก้",
    },
  },
];
