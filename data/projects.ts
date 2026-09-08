// =============================================================================
// PROJECT CONTENT
// Used by: app/components/ProjectsSection.tsx
// Card image: app/components/ProjectThumbnail.tsx
// Image folder: /public/projects/ -> "/projects/file.webp"
// Full guide: data/README.md
// =============================================================================

export type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";
export type ProjectVisibility = "Public" | "Private";

export interface Project {
  id: number;
  title: string;
  titleTH: string;
  description: string;
  descriptionTH: string;
  tech: string[];
  status: ProjectStatus;
  visibility?: ProjectVisibility;
  category: string;
  gradient: string;
  role?: string;
  roleTH?: string;
  period?: string;
  periodTH?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  repo?: string;
}

// -----------------------------------------------------------------------------
// EDIT PROJECT CARDS HERE
// Required: id, title, titleTH, description, descriptionTH, tech, status,
// category, gradient
// Optional: visibility, role, roleTH, period, periodTH, image, imageAlt, link, repo
// Only projects with a real screenshot are listed. Practice repos without a
// preview image were removed; add them back with an image when one exists.
// -----------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: 1,
    title: "EME RMUTI Department Website",
    titleTH: "เว็บไซต์ภาควิชาวิศวกรรมเครื่องกล RMUTI",
    description:
      "Built and launched a WordPress site for RMUTI Mechanical Engineering after gathering requirements and designing its UI/UX and content structure.",
    descriptionTH:
      "พัฒนาเว็บไซต์ให้ภาควิชาวิศวกรรมเครื่องกล โดยเก็บความต้องการ ออกแบบ UI/UX และสร้างด้วย WordPress, Elementor และ HTML/CSS จนเปิดใช้งานจริง",
    tech: ["WordPress", "Elementor plugin", "HTML", "CSS"],
    status: "Completed",
    category: "Work",
    role: "Project Lead · WordPress Developer & UI Designer",
    roleTH: "หัวหน้าโครงการ · นักพัฒนา WordPress และนักออกแบบ UI",
    period: "March 2025 – April 2025",
    periodTH: "มีนาคม 2568 – เมษายน 2568",
    image: "/projects/eme.webp",
    imageAlt: "หน้าเว็บไซต์ภาควิชาวิศวกรรมเครื่องกล RMUTI",
    gradient: "from-slate-600 to-slate-800",
    link: "https://eme.eng.rmuti.ac.th/",
  },
  {
    id: 2,
    title: "IoT Smart Warehouse System",
    titleTH: "ระบบคลังสินค้าอัจฉริยะ IoT",
    description:
      "Built a real-time warehouse monitor by connecting ESP32 sensors to a React dashboard, enabling fast inventory visibility with low data latency.",
    descriptionTH:
      "พัฒนาระบบติดตามคลังสินค้าแบบเรียลไทม์ โดยเชื่อมเซนเซอร์ ESP32 กับแดชบอร์ด React เพื่อลดความหน่วงในการตรวจสอบข้อมูล",
    tech: ["React", "ESP32", "Sensors Integration", "Embedded Systems"],
    status: "Completed",
    category: "IoT",
    image: "/projects/warehouse.webp",
    imageAlt: "ภาพตัวอย่างระบบคลังสินค้าอัจฉริยะ IoT",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/ru1no888/IOT-smart-Warehouse-Mini-Project.git",
  },
  {
    id: 13,
    title: "Weather Web Frontend",
    titleTH: "เว็บตรวจสภาพอากาศ",
    description:
      "Built a city weather search using OpenWeatherMap API, showing temperature, humidity, conditions, and rotating backgrounds in real time.",
    descriptionTH:
      "พัฒนาเว็บค้นหาสภาพอากาศรายเมืองผ่าน OpenWeatherMap API แสดงอุณหภูมิ ความชื้น สภาพอากาศ และเปลี่ยนพื้นหลังอัตโนมัติ",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    status: "Completed",
    category: "Web",
    image: "/projects/weather.webp",
    imageAlt: "หน้าเว็บค้นหาและแสดงสภาพอากาศรายเมือง",
    gradient: "from-slate-600 to-slate-800",
    link: "https://weather-web-frontend-rho.vercel.app/",
    repo: "https://github.com/Dparamet/Weather-Web-frontend.git",
  },
  {
    id: 18,
    title: "Portfolio D-Kub",
    titleTH: "เว็บไซต์ผลงาน Portfolio D-Kub",
    description:
      "Built a modern responsive portfolio that organizes project highlights, professional details, and contact channels into a focused layout.",
    descriptionTH:
      "สร้างเว็บไซต์ Portfolio แบบ Responsive ที่จัดผลงาน ข้อมูลวิชาชีพ และช่องทางติดต่อให้กระชับ อ่านง่าย และเหมาะกับทุกหน้าจอ",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/portfolio.webp",
    imageAlt: "หน้าเว็บไซต์ Portfolio D-Kub",
    gradient: "from-slate-600 to-slate-800",
    link: "https://portfolio-d-kub.vercel.app/",
    repo: "https://github.com/Dparamet/Portfolio-D-Kub.git",
  },
  {
    id: 19,
    title: "Mind-Paint",
    titleTH: "แอปวาดภาพ Mind-Paint",
    description:
      "Built an interactive React drawing app with HTML5 Canvas for responsive rendering and Local Storage for preserving user artwork.",
    descriptionTH:
      "พัฒนาแอปวาดภาพด้วย React และ HTML5 Canvas ให้ตอบสนองรวดเร็ว พร้อมบันทึกผลงานของผู้ใช้ไว้ใน Local Storage",
    tech: ["React", "HTML5 Canvas API", "Local Storage"],
    status: "Completed",
    category: "Web",
    image: "/projects/mind-paint.webp",
    imageAlt: "ภาพตัวอย่างแอปวาดภาพ Mind-Paint",
    gradient: "from-fuchsia-500 to-violet-700",
    link: "https://mind-paint.vercel.app/",
  },
  {
    id: 20,
    title: "Hardware POS System",
    titleTH: "ระบบขายหน้าร้านสำหรับฮาร์ดแวร์",
    description:
      "Lead a five-person team building a hardware POS with barcode scanning, customer displays, role-based Supabase RLS, and offline-ready logs.",
    descriptionTH:
      "นำทีม 5 คนพัฒนาระบบ POS สำหรับร้านฮาร์ดแวร์ รองรับสแกนบาร์โค้ด จอลูกค้า สิทธิ์พนักงานด้วย Supabase RLS และบันทึกแบบออฟไลน์",
    tech: ["Supabase", "Supabase RLS", "Barcode Scanning", "Offline-Ready Data", "Git"],
    status: "In Progress",
    visibility: "Private",
    category: "Work",
    role: "Project Lead",
    roleTH: "หัวหน้าโครงการ",
    period: "May 2026 – Present",
    periodTH: "พฤษภาคม 2569 – ปัจจุบัน",
    image: "/projects/POS.webp",
    imageAlt: "หน้าระบบขายหน้าร้านสำหรับฮาร์ดแวร์",
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: 21,
    title: "TRP Powers Plus Landing Page",
    titleTH: "หน้าเว็บไซต์ TRP Powers Plus",
    description:
      "Led a full-stack landing page from Figma to launch, integrating Supabase CRM and Git quality workflows to improve performance and conversion.",
    descriptionTH:
      "นำทีมพัฒนา Landing Page ตั้งแต่ Figma จนเปิดใช้งานจริง เชื่อม Supabase CRM และกำหนด Git Workflow เพื่อคุณภาพ ประสิทธิภาพ และ Conversion",
    tech: ["Supabase", "CRM Integration", "Figma", "Git"],
    status: "Completed",
    category: "Work",
    role: "Tech Lead & Full-Stack Developer",
    roleTH: "ผู้นำด้านเทคนิคและนักพัฒนา Full-Stack",
    period: "May 2026 – July 2026",
    periodTH: "พฤษภาคม 2569 – กรกฎาคม 2569",
    image: "/projects/trp.webp",
    imageAlt: "หน้า Landing Page ของ TRP Powers Plus",
    gradient: "from-cyan-600 to-blue-800",
    link: "https://trppowersplus.com/",
  },

  // ===========================================================================
  // HOW TO ADD A NEW PROJECT CARD
  // Copy this block, paste it above this guide, then edit the values.
  // ===========================================================================
  // {
  //   id: 22, // required, must be unique
  //   title: "My New App",
  //   titleTH: "แอปใหม่ของฉัน",
  //   description: "What the project does and which problem it solves.",
  //   descriptionTH: "แอปนี้ทำอะไร สร้างเพื่อใคร และแก้ปัญหาอย่างไร",
  //   tech: ["React", "Firebase"],
  //   status: "Completed", // "Completed" | "In Progress" | "Coming Soon"
  //   visibility: "Public", // optional: "Public" | "Private"; defaults to "Public"
  //   category: "Mobile", // automatically becomes a filter tab
  //   gradient: "from-amber-200 to-orange-100", // fallback when image is omitted
  //
  //   // Optional work-experience metadata
  //   role: "Project Lead",
  //   roleTH: "หัวหน้าโครงการ",
  //   period: "May 2026 – Present",
  //   periodTH: "พฤษภาคม 2569 – ปัจจุบัน",
  //
  //   // Optional image fields — use image and imageAlt together
  //   image: "/projects/my-app.webp",
  //   imageAlt: "Dashboard of My New App",
  //
  //   // Optional URLs
  //   link: "https://myapp.vercel.app",
  //   repo: "https://github.com/you/myapp",
  // },
];
