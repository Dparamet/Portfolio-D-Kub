// =============================================================================
// UPDATES / NEWS CONTENT
// Used by: app/components/UpdatesSection.tsx
// Keep newest first. Add a new object at the top of the array.
// Full guide: data/README.md
// =============================================================================

export type UpdateTag =
  | "Launch"
  | "Freelance"
  | "Learning"
  | "Thesis"
  | "Leadership"
  | "Competition"
  | "Update";

export interface Update {
  id: number;
  date: string;
  dateTH: string;
  title: string;
  titleTH: string;
  tag: UpdateTag;
  link?: string;
}

// -----------------------------------------------------------------------------
// EDIT UPDATES HERE — newest first
// -----------------------------------------------------------------------------
export const updates: Update[] = [
  {
    id: 9,
    date: "Sep 2026",
    dateTH: "ก.ย. 2569",
    title: "Team CARELINK — Top 4 at INNOBIZ IGNITE business plan competition",
    titleTH: "ทีม CARELINK ได้ Top 4 การประกวดแผนธุรกิจ INNOBIZ IGNITE",
    tag: "Competition",
  },
  {
    id: 8,
    date: "Jul 2026",
    dateTH: "ก.ค. 2569",
    title:
      "Regional cybersecurity finalist at National Skills Competition #31, on to the national final",
    titleTH:
      "เป็นตัวแทนภาคอีสานสาย Cybersecurity ในการแข่งขันฝีมือแรงงานแห่งชาติ ครั้งที่ 31 เข้าชิงระดับประเทศ",
    tag: "Competition",
  },
  {
    id: 7,
    date: "2026",
    dateTH: "2569",
    title: "Studying \"AI for Solopreneurs\" (RMUTI ECP)",
    titleTH: "เรียนวิชา \"AI for Solopreneurs\" สาขา ECP มทร.อีสาน",
    tag: "Learning",
  },
  {
    id: 6,
    date: "2026",
    dateTH: "2569",
    title: "Refreshed this portfolio — new branding, motion, and ambient UI",
    titleTH: "ปรับปรุงเว็บ Portfolio นี้ใหม่ — แบรนด์ดิ้ง งานโมชัน และพื้นหลังแบบ ambient",
    tag: "Update",
    link: "https://portfolio-d-kub.vercel.app/",
  },
  {
    id: 5,
    date: "May 2026 – Present",
    dateTH: "พ.ค. 2569 – ปัจจุบัน",
    title: "Leading a 5-person team building a hardware POS system",
    titleTH: "นำทีม 5 คนพัฒนาระบบ POS สำหรับร้านฮาร์ดแวร์",
    tag: "Freelance",
  },
  {
    id: 4,
    date: "2026",
    dateTH: "2569",
    title: "Building an IoT smart-watch thesis (ESP32 / Arduino)",
    titleTH: "พัฒนาปริญญานิพนธ์นาฬิกาอัจฉริยะ IoT (ESP32 / Arduino)",
    tag: "Thesis",
  },
  {
    id: 3,
    date: "Jul 2026",
    dateTH: "ก.ค. 2569",
    title: "Delivered the TRP Powers Plus landing page to production",
    titleTH: "ส่งมอบ Landing Page ให้ TRP Powers Plus ขึ้นใช้งานจริง",
    tag: "Launch",
    link: "https://trppowersplus.com/",
  },
  {
    id: 2,
    date: "2025",
    dateTH: "2568",
    title: "Completed Territorial Defense training as Battalion Commander (~200 cadets)",
    titleTH: "จบการฝึก รด. ในตำแหน่งผู้บังคับกองพัน (กำลังพลเกือบ 200 นาย)",
    tag: "Leadership",
  },
  {
    id: 1,
    date: "Apr 2025",
    dateTH: "เม.ย. 2568",
    title: "Launched the RMUTI Mechanical Engineering department website",
    titleTH: "เปิดใช้งานเว็บไซต์ภาควิชาวิศวกรรมเครื่องกล มทร.อีสาน",
    tag: "Launch",
    link: "https://eme.eng.rmuti.ac.th/",
  },
];
