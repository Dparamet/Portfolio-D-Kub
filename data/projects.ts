// =============================================================================
// PROJECT CONTENT
// Used by: app/components/ProjectsSection.tsx
// Card image: app/components/ProjectThumbnail.tsx
// Image folder: /public/projects/ -> "/projects/file.webp"
// Full guide: data/README.md
// =============================================================================

export type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";

export interface Project {
  id: number;
  title: string;
  titleTH: string;
  description: string;
  descriptionTH: string;
  tech: string[];
  status: ProjectStatus;
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
// Optional: role, roleTH, period, periodTH, image, imageAlt, link, repo
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
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
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
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/ru1no888/IOT-smart-Warehouse-Mini-Project.git",
  },
  {
    id: 3,
    title: "Terminal Game Survival Choice",
    titleTH: "เกมเอาตัวรอดแบบเลือกเส้นทาง",
    description:
      "Built a Python terminal adventure where player choices branch the story; conditionals and state variables determine each survival outcome.",
    descriptionTH:
      "สร้างเกมผจญภัยบน Terminal ด้วย Python ให้ผู้เล่นเลือกเส้นทาง โดยใช้เงื่อนไขและตัวแปรกำหนดเรื่องราวและผลลัพธ์การเอาตัวรอด",
    tech: ["Python"],
    status: "Completed",
    category: "Python",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/Terminal_Game-Python.git",
  },
  {
    id: 4,
    title: "rock-paper-scissor",
    titleTH: "เกมเป่ายิ้งฉุบด้วย Python",
    description:
      "Built a Tkinter Rock-Paper-Scissors game in Python to handle GUI events, player input, and randomized computer choices.",
    descriptionTH:
      "พัฒนาเกมเป่ายิ้งฉุบด้วย Python และ Tkinter เพื่อฝึกจัดการเหตุการณ์บน GUI รับค่าผู้เล่น และสุ่มตัวเลือกของคอมพิวเตอร์",
    tech: ["Python"],
    status: "Completed",
    category: "Python",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/rock-paper-scissor-by-copilot-.git",
  },
  {
    id: 5,
    title: "Dog simulator game (terminal)",
    titleTH: "เกมจำลองเลี้ยงสุนัขบน Terminal",
    description:
      "Built a Java virtual-pet simulator where players manage a dog's hunger, happiness, and energy through feeding, play, and rest decisions.",
    descriptionTH:
      "สร้างเกมเลี้ยงสุนัขเสมือนด้วย Java ให้ผู้เล่นบริหารค่าความหิว ความสุข และพลังงาน ผ่านการให้อาหาร เล่น และพักผ่อน",
    tech: ["Java"],
    status: "Completed",
    category: "Java",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/Dog-simulator-like-pou-games-java-mid-course-Project.git",
  },
  {
    id: 6,
    title: "calculator-by-using-java",
    titleTH: "เครื่องคิดเลขด้วย Java",
    description:
      "Built a Java calculator that validates user input and performs addition, subtraction, multiplication, and division through clear arithmetic logic.",
    descriptionTH:
      "พัฒนาเครื่องคิดเลขด้วย Java สำหรับบวก ลบ คูณ และหาร พร้อมจัดการข้อมูลที่ผู้ใช้ป้อน เพื่อฝึกตรรกะและพื้นฐานการเขียนโปรแกรม",
    tech: ["Java"],
    status: "Completed",
    category: "Java",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/calculator-by-using-java.git",
  },
  {
    id: 7,
    title: "DNA-cafe-web-by-using-html",
    titleTH: "เว็บไซต์ DNA Cafe",
    description:
      "Designed a responsive single-page website for DNA Cafe using semantic HTML and CSS, presenting the café in a warm, easy-to-scan layout.",
    descriptionTH:
      "ออกแบบเว็บไซต์หน้าเดียวให้ DNA Cafe ด้วย HTML และ CSS โดยเน้นโครงสร้าง Semantic การอ่านง่าย และบรรยากาศอบอุ่นของร้าน",
    tech: ["html","CSS"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/DNA-cafe-web-by-using-html-Dparamet.git",
  },
  {
    id: 8,
    title: "Rock-Paper-Scissors",
    titleTH: "เกมเป่ายิ้งฉุบบนเว็บ",
    description:
      "Built a browser Rock-Paper-Scissors game with JavaScript, using randomized computer choices, conditional rules, and live UI state updates.",
    descriptionTH:
      "พัฒนาเกมเป่ายิ้งฉุบบนเว็บด้วย JavaScript โดยสุ่มตัวเลือกของคอมพิวเตอร์ ใช้เงื่อนไขตัดสินผล และอัปเดตสถานะบนหน้าจอทันที",
    tech: ["JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/Rock-Paper-Scissors-by-me-self-coding.git",
  },
  {
    id: 9,
    title: "Easy Horoscope Generator",
    titleTH: "เครื่องสุ่มคำทำนาย",
    description:
      "Built a lightweight JavaScript fortune generator that selects and formats random predictions from arrays for quick daily entertainment.",
    descriptionTH:
      "สร้างเครื่องสุ่มคำทำนายด้วย JavaScript โดยเลือกข้อความจาก Array และจัดรูปแบบผลลัพธ์ เพื่อฝึกการเข้าถึงและจัดการข้อมูล",
    tech: ["JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link:"https://github.com/Dparamet/Horoscope-version-easy-maybe-.git",
  },
  {
    id: 10,
    title: "Mood Changing by Click",
    titleTH: "เว็บเปลี่ยนอารมณ์และสี",
    description:
      "Built an interactive mood page with HTML, CSS, and JavaScript; each click updates the mood state and background color instantly.",
    descriptionTH:
      "พัฒนาเว็บโต้ตอบที่เปลี่ยนอารมณ์และสีพื้นหลังเมื่อคลิก โดยใช้ HTML, CSS และ JavaScript อัปเดตสถานะบนหน้าจอทันที",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Mood-Changing-by-click-html-css-javascript-.git",
  },
  {
    id: 11,
    title: "Random Quotes Generator",
    titleTH: "เครื่องสุ่มคำคม",
    description:
      "Built a JavaScript quote generator that shows a new attributed quote on each click, with smooth color transitions and DOM updates.",
    descriptionTH:
      "สร้างเครื่องสุ่มคำคมด้วย JavaScript ให้แสดงข้อความและผู้กล่าวใหม่เมื่อคลิก พร้อมเปลี่ยนสีและอัปเดต DOM อย่างลื่นไหล",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Random-Quotes-website-by-using-javascript-Trifecta-.git",
  },
  {
    id: 12,
    title: "Meme Random",
    titleTH: "เครื่องสุ่มมีม",
    description:
      "Built a JavaScript meme generator that fetches a new image from an external API on demand, practicing async requests and response handling.",
    descriptionTH:
      "พัฒนาเครื่องสุ่มมีมด้วย JavaScript โดยดึงภาพใหม่จาก API เมื่อผู้ใช้กด เพื่อฝึก Async/Await และการจัดการข้อมูลตอบกลับ",
    tech: ["JavaScript", "API"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Meme-Random.git",
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
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    link: "https://dparamet.github.io/Weather-Web-frontend/",
    repo: "https://github.com/Dparamet/Weather-Web-frontend.git",
  },
  {
    id: 14,
    title: "Pomodoro Timer",
    titleTH: "นาฬิกา Pomodoro",
    description:
      "Built a JavaScript Pomodoro timer with adjustable sessions, start-stop-reset controls, a live countdown, and completion alerts for focused work.",
    descriptionTH:
      "สร้างนาฬิกา Pomodoro ด้วย JavaScript ปรับช่วงเวลาได้ มีปุ่มเริ่ม หยุด รีเซ็ต นับถอยหลังแบบเรียลไทม์ และแจ้งเตือนเมื่อครบเวลา",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Promodo-Alarm-by-using-html-css-javscript.git",
  },
  {
    id: 15,
    title: "Note Save Diary",
    titleTH: "สมุดบันทึกและติดตามงาน",
    description:
      "Built a Next.js note and task tracker with Thai calendar support, deadline alerts, a live clock, and persistent Supabase storage.",
    descriptionTH:
      "พัฒนาเว็บบันทึกและติดตามงานด้วย Next.js รองรับปฏิทินไทย แจ้งเตือนกำหนดส่ง แสดงเวลาปัจจุบัน และเก็บข้อมูลด้วย Supabase",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/note-save-diary-by-copilot-4.6.git",
  },
  {
    id: 16,
    title: "To-Do List",
    titleTH: "รายการสิ่งที่ต้องทำ",
    description:
      "Built a simple daily task manager where users can add, edit, delete, complete, and review tasks through a clear browser interface.",
    descriptionTH:
      "สร้างเว็บจัดการงานประจำวัน ให้ผู้ใช้เพิ่ม แก้ไข ลบ ทำเครื่องหมายเสร็จ และตรวจสอบรายการผ่านหน้าจอที่เรียบง่าย",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/to-do_list.git",
  },
  {
    id: 17,
    title: "Dparamet Portfolio",
    titleTH: "เว็บไซต์ผลงาน Dparamet",
    description:
      "Built a responsive personal portfolio with HTML, CSS, and JavaScript to present selected projects, skills, and contact information clearly.",
    descriptionTH:
      "พัฒนาเว็บไซต์ Portfolio แบบ Responsive ด้วย HTML, CSS และ JavaScript เพื่อแสดงผลงาน ทักษะ และช่องทางติดต่ออย่างเป็นระเบียบ",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Dparamet.git",
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
    image: "/projects/dparamet-portfolio.svg",
    imageAlt: "Preview of the Dparamet portfolio website interface",
    gradient: "from-slate-600 to-slate-800",
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
    gradient: "from-fuchsia-500 to-violet-700",
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
    category: "Work",
    role: "Project Lead",
    roleTH: "หัวหน้าโครงการ",
    period: "May 2026 – Present",
    periodTH: "พฤษภาคม 2569 – ปัจจุบัน",
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
    gradient: "from-cyan-600 to-blue-800",
    link: "https://trppowersplus.com",
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
