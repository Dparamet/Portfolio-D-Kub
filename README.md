# Portfolio D-Kub

Modern portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

โปรเจกต์นี้เป็นเว็บ Portfolio แบบหน้าเดียว (single-page sections) พร้อมธีมสว่าง/มืด, รองรับ 2 ภาษา (ไทย/อังกฤษ), และระบบส่งข้อความผ่าน EmailJS

## ✨ Features

- 🌗 Toggle ธีม **Light / Dark**
- 🌍 Toggle ภาษา **ไทย / English**
- 🧭 Floating navigation (desktop rail + mobile bottom bar)
- 🗂️ Project cards สไตล์ **GitHub repo** — language dot, topic pills, live/repo links
- 🔍 Filter โปรเจกต์ตามหมวดหมู่ (Web, IoT, Python, Java …)
- 📨 Contact form ส่งข้อความผ่าน **EmailJS** (โหลด lazy — ไม่กระทบ initial bundle)
- 📦 แยกข้อมูลคอนเทนต์ไว้ใน `data/` เพื่อแก้ไขง่าย

## 🛠 Tech Stack

| Layer | Library / Version |
|---|---|
| Framework | Next.js `16.1.6` (App Router) |
| UI | React `19.2.3` |
| Language | TypeScript `5` |
| Styling | Tailwind CSS `v4` |
| Icons | `react-icons` (tree-shaken via `optimizePackageImports`) |
| Email | `@emailjs/browser` (dynamic import — loads only on form submit) |
| Font | Inter via `next/font/google` (self-hosted) |

## 📁 Project Structure

```text
portfolio/
├─ app/
│  ├─ page.tsx                    # หน้า Portfolio หลัก (single-page sections)
│  ├─ layout.tsx                  # Root layout + font + providers
│  ├─ globals.css                 # CSS variables + base styles
│  └─ components/
│     ├─ FloatingNav.tsx          # Desktop rail + mobile bottom bar
│     ├─ PreferenceControls.tsx   # Theme / language toggle buttons
│     ├─ ProjectsSection.tsx      # GitHub-style project cards + filter tabs
│     ├─ LabSection.tsx           # Soft skills section
│     └─ SitePreferencesProvider.tsx  # Theme/language context (localStorage)
├─ data/
│  ├─ profile.ts      # ชื่อ, role, bio, social links, info cards
│  ├─ projects.ts     # รายการโปรเจกต์ (title, tech, status, repo, link)
│  ├─ skills.ts       # หมวดทักษะเทคนิค
│  ├─ lab.ts          # soft skills / lab items
│  └─ softSkills.ts
├─ public/
│  └─ profile.jpg     # รูปโปรไฟล์ (วางที่นี่แล้ว avatarImage จะแสดงอัตโนมัติ)
├─ next.config.ts
├─ package.json
└─ .env               # EmailJS keys (ดูหัวข้อ Environment Variables)
```

## 🚀 Getting Started

### 1) ติดตั้ง dependencies

```bash
npm install
```

### 2) ตั้งค่า Environment Variables

สร้างไฟล์ `.env.local` ที่โฟลเดอร์ `portfolio/`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> หมายเหตุ: ค่า `NEXT_PUBLIC_*` จะถูกใช้ฝั่ง client — ใช้เฉพาะ EmailJS public key ที่เปิดเผยได้

### 3) รัน dev server

```bash
npm run dev
```

เปิดที่: [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start Turbopack dev server |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## ✍️ Content Editing Guide

แก้ไขเนื้อหาผ่านไฟล์ใน `data/` — ไม่ต้องแตะ component:

| ไฟล์ | แก้อะไร |
|---|---|
| `data/profile.ts` | ชื่อ, role, bio, social links, info cards |
| `data/projects.ts` | เพิ่ม/ลบ/แก้โปรเจกต์ + tech stack + status |
| `data/skills.ts` | หมวดทักษะเทคนิค |
| `data/lab.ts` | soft skills / lab section |

### เพิ่มโปรเจกต์ใหม่ใน `data/projects.ts`

```ts
{
  id: 20,                          // ต้อง unique
  title: "ชื่อโปรเจกต์",
  description: "คำอธิบาย",
  tech: ["Next.js", "TypeScript"], // tech[0] ใช้แสดง language dot
  status: "Completed",             // "Completed" | "In Progress" | "Coming Soon"
  category: "Web",                 // ชื่อนี้จะขึ้นเป็น filter tab อัตโนมัติ
  repo: "https://github.com/...",  // optional
  link: "https://...",             // optional — live demo
  gradient: "from-sky-600 to-slate-700", // ยังคงอยู่ใน type แม้ card ไม่แสดง thumbnail
}
```

### เปลี่ยนรูปโปรไฟล์

วางไฟล์รูปที่ `public/profile.jpg` — แสดงผลอัตโนมัติ (ตั้งค่าใน `data/profile.ts → avatarImage`)

## ⚡ Performance Notes

| สิ่งที่ optimize แล้ว | รายละเอียด |
|---|---|
| `react-icons` tree-shaking | `optimizePackageImports` ใน `next.config.ts` |
| EmailJS lazy load | `await import("@emailjs/browser")` เฉพาะตอนกดส่ง form |
| Scroll listener throttle | `requestAnimationFrame` ใน FloatingNav |
| CSS transition | เฉพาะ properties ที่ใช้จริง (ไม่ใช้ `transition: all`) |
| Font | Inter self-hosted ผ่าน `next/font/google` |

## ☁️ Deployment

แนะนำ **Vercel** (zero-config สำหรับ Next.js):

1. Push to GitHub
2. Import repo ที่ [vercel.com](https://vercel.com)
3. ตั้งค่า Environment Variables ใน Vercel dashboard
4. Deploy อัตโนมัติทุก push to `main`

## 🗺 Roadmap

- [ ] Backend + Supabase database
- [ ] Admin CRM panel (เปลี่ยนรูป/content โดยไม่ต้องแก้ code)
- [ ] Framer Motion animations (scroll reveal, hero effects)
- [ ] SEO meta + Open Graph image

---

Built with ☕ and persistence.
