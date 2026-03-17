// ============================================================
//  PROJECTS DATA
//  To add a new project — copy one block below and fill it in.
//  "category" controls the filter tabs shown on the page.
// ============================================================

export type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  category: string;   // shown as a filter tab  e.g. "Web", "IoT", "Mobile"
  link?: string;      // optional: live demo URL
  repo?: string;      // optional: GitHub repo URL
  gradient: string;   // Tailwind gradient classes for the card thumbnail
}

export const projects: Project[] = [
  {
    id: 1,
    title: "website",
    description:
      "A full-stack e-commerce platform with product listings, cart, and checkout flow.",
    tech: ["wordpress", "Elemental plugin", "html","CSS"],
    status: "In Progress",
    category: "Work",
    gradient: "from-sky-600 to-slate-700",
    link: "https://eme.eng.rmuti.ac.th/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExSVlPNThUS2p6TklmcTIwZHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6Lr8FTxiDCRKjap2G9Nr1IlUVi-ugDGMhTXuAHnH0fHAgJGCaJg1UOxFr5hw_aem_fN56tUhEMcCit8u7erA-yQ"
    
  },
  {
    id: 2,
    title: "IoT Smart Warehouse System",
    description:
      "A comprehensive warehouse automation system with real-time temperature & humidity monitoring via DHT22, automated fan control, gate management, buzzer alerts, and Telegram bot notifications. Features a futuristic dashboard with Chart.js visualization, user authentication, API key protection, rate limiting, and comprehensive security logging.",
    tech: ["ESP32", "PHP", "MySQL", "JavaScript", "Chart.js", "Telegram Bot"],
    status: "Completed",
    category: "IoT",
    gradient: "from-emerald-500 to-teal-700",
    repo: "https://github.com/ru1no888/IOT-smart-Warehouse-Mini-Project.git",
  },
  {
    id: 3,
    title: "Terminal Game Survival Choice",
    description:
      "A classic Text-Based Adventure Game powered by Python. In this game, players navigate through a branching narrative where every choice matters. It features dynamic control flow, variable-based decision making, and immersive storytelling—all within the simplicity of your terminal.",
    tech: ["Python"],
    status: "Completed",
    category: "Python",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/Terminal_Game-Python.git",
  },
  {
    id: 4,
    title: "rock-paper-scissor",
    description:
      "Simple Rock-Paper-Scissors game with a Tkinter GUI.",
    tech: ["Python"],
    status: "Completed",
    category: "Python",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/rock-paper-scissor-by-copilot-.git",
  },
  {
    id: 5,
    title: "Dog simulator game (terminal)",
    description:
      "A Java-based virtual pet simulator inspired by the classic 'Pou' game. Take care of your digital dog, 'Mommam', by managing its hunger, happiness, and energy levels. Choose your actions wisely—whether it's feeding, playing, or letting it rest—to keep your pet healthy and happy!",
    tech: ["Java"],
    status: "Completed",
    category: "Java",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/Dog-simulator-like-pou-games-java-mid-course-Project.git",
  },
  {
    id: 6,
    title: "calculator-by-using-java",
    description:
      "A fundamental calculator application built with Java. This project focuses on core programming logic to handle basic arithmetic operations including Addition, Subtraction, Multiplication, and Division. It serves as a solid foundation for understanding user input processing and mathematical logic in Java development",
    tech: ["Java"],
    status: "Completed",
    category: "Java",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/calculator-by-using-java.git",
  },
  {
    id: 7,
    title: "DNA-cafe-web-by-using-html",
    description:
      "A cozy and elegant single-page website for DNA Cafe, built from scratch using HTML and CSS. This project showcases fundamental web development skills, focusing on semantic structure",
    tech: ["html","CSS"],
    status: "Completed",
    category: "Web",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/DNA-cafe-web-by-using-html-Dparamet.git",
  },
  {
    id: 8,
    title: "Rock-Paper-Scissors",
    description:
      "A self-coded Rock-Paper-Scissors game developed using JavaScript. This project demonstrates core programming concepts such as randomized AI decision-making, complex conditional logic (if-else structures), and dynamic UI updates. It’s a clean, functional example of handling user input and game states in a browser environment.",
    tech: ["JavaScript"],
    status: "Completed",
    category: "javaScript",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/Rock-Paper-Scissors-by-me-self-coding.git",
  },
  {
    id: 9,
    title: "Easy Horoscope Generator",
    description:
      "A lightweight randomized prediction system. This project focuses on array manipulation and string handling to deliver fun, randomized daily fortunes, perfect for practicing logic-based data retrieval.",
    tech: ["JavaScript"],
    status: "Completed",
    category: "jvaScript",
    gradient: "from-slate-700 to-zinc-950",
    link:"https://github.com/Dparamet/Horoscope-version-easy-maybe-.git",
  },
  {
    id: 11,
    title: "Mood Changing by Click",
    description:
      "An interactive mood-based color changing application. Click to change the mood and dynamically update the background color. Built with vanilla HTML, CSS, and JavaScript to create an engaging and responsive user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-pink-500 to-rose-500",
    repo: "https://github.com/Dparamet/Mood-Changing-by-click-html-css-javascript-.git",
  },
  {
    id: 12,
    title: "Random Quotes Generator",
    description:
      "A dynamic quotes generator that displays inspirational and random quotes with each click. Features a beautiful UI with color transitions and quote attribution. Perfect for practicing API integration and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-purple-500 to-pink-500",
    repo: "https://github.com/Dparamet/Random-Quotes-website-by-using-javascript-Trifecta-.git",
  },
  {
    id: 13,
    title: "Meme Random",
    description:
      "A fun random meme generator that fetches and displays random memes from the web. Click to get a new meme every time. Great for learning about API calls and async-await patterns in JavaScript.",
    tech: ["JavaScript", "API"],
    status: "Completed",
    category: "Web",
    gradient: "from-yellow-400 to-orange-500",
    repo: "https://github.com/Dparamet/Meme-Random.git",
  },
  {
    id: 14,
    title: "Weather Web Frontend",
    description:
      "A real-time weather checking application that searches weather data for any city worldwide. Features dynamic backgrounds that change every 5 seconds and displays temperature, humidity, and weather conditions from OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    status: "Completed",
    category: "Web",
    gradient: "from-blue-400 to-cyan-500",
    link: "https://dparamet.github.io/Weather-Web-frontend/",
    repo: "https://github.com/Dparamet/Weather-Web-frontend.git",
  },
  {
    id: 15,
    title: "Pomodoro Timer",
    description:
      "A productivity-focused Pomodoro timer application with customizable work intervals. Features Start/Stop/Reset controls, real-time countdown display, and alert notifications when the session ends. Built with vanilla JavaScript for maximum performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-red-500 to-orange-400",
    repo: "https://github.com/Dparamet/Promodo-Alarm-by-using-html-css-javscript.git",
  },
  {
    id: 16,
    title: "Note Save Diary",
    description:
      "A full-featured note-taking application with Thai calendar integration, deadline management, and anime-themed UI. Features include task tracking, deadline alerts with color coding, real-time Thai clock, and Supabase database integration for persistent storage.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "Completed",
    category: "Web",
    gradient: "from-indigo-500 to-purple-600",
    repo: "https://github.com/Dparamet/note-save-diary-by-copilot-4.6.git",
  },
  {
    id: 17,
    title: "To-Do List",
    description:
      "A clean and simple to-do list application for managing daily tasks. Features include adding, editing, and deleting tasks with completion status tracking. Built with a focus on simplicity and ease of use.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-green-400 to-emerald-500",
    repo: "https://github.com/Dparamet/to-do_list.git",
  },
  {
    id: 18,
    title: "Dparamet Portfolio",
    description:
      "A personal portfolio website showcasing projects and skills. Displays a curated collection of web development projects and professional information in a clean, organized layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-slate-600 to-slate-800",
    repo: "https://github.com/Dparamet/Dparamet.git",
  },
  {
    id: 19,
    title: "Portfolio D-Kub",
    description:
      "A modern portfolio website featuring a professional layout with project showcases and contact information. Demonstrates web design principles and responsive layout techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web",
    gradient: "from-cyan-500 to-blue-600",
    repo: "https://github.com/Dparamet/Portfolio-D-Kub.git",
  },

  // ── HOW TO ADD A NEW PROJECT ─────────────────────────────
  // {
  //   id: 3,
  //   title: "My New App",
  //   description: "Short description of what it does.",
  //   tech: ["React", "Firebase"],
  //   status: "Completed",          // "Completed" | "In Progress" | "Coming Soon"
  //   category: "Mobile",           // any string — auto-appears as a filter tab
  //   link: "https://myapp.vercel.app",
  //   repo: "https://github.com/you/myapp",
  //   gradient: "from-amber-200 to-orange-100",
  // },
  // ────────────────────────────────────────────────────────
];

// Status → badge colour mapping (add new statuses here if needed)
export const statusColors: Record<ProjectStatus, string> = {
  "Completed":   "bg-sky-500/20 text-sky-200 border border-sky-400/40",
  "In Progress": "bg-blue-500/20 text-blue-200 border border-blue-400/40",
  "Coming Soon": "bg-zinc-800 text-zinc-300 border border-zinc-700",
};
