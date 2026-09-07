# Portfolio D-Kub

Modern portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

โปรเจกต์นี้เป็นเว็บ Portfolio แบบหน้าเดียว (single-page sections) พร้อมธีมสว่าง/มืด, รองรับ 2 ภาษา (ไทย/อังกฤษ), และระบบส่งข้อความผ่าน EmailJS

## ✨ Features

- 🌗 Toggle ธีม **Light / Dark**
- 🌍 Toggle ภาษา **ไทย / English**
- 🧭 Floating navigation (desktop rail + mobile bottom bar) + scroll progress bar
- 💼 Work Experience Timeline จากข้อมูล Resume
- 🗂️ Project cards สไตล์ **GitHub repo** — language dot, topic pills, live/repo links
- 🔍 Filter โปรเจกต์ตามหมวดหมู่ (Web, IoT, Python, Java …)
- 📰 Updates feed — สิ่งที่กำลังทำ เรียน และเพิ่งส่งมอบ (`data/updates.ts`)
- 🔗 Social links: GitHub, LinkedIn, Facebook, Instagram, email, phone
- 🎞️ Ambient UI — static dot-grid texture + soft colour wash (ไม่มี animation, เบาบนทุกเครื่อง)
- 📨 Contact form ส่งข้อความผ่าน **EmailJS** (โหลด lazy — ไม่กระทบ initial bundle)
- 📦 แยกข้อมูลคอนเทนต์ไว้ใน `data/` เพื่อแก้ไขง่าย

## 🛠 Tech Stack

| Layer | Library / Version |
|---|---|
| Framework | Next.js `16.2.12` (App Router) |
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
│     ├─ ScrollProgress.tsx       # Top gradient scroll-progress bar
│     ├─ PreferenceControls.tsx   # Theme / language toggle buttons
│     ├─ ExperienceSection.tsx    # Work experience timeline
│     ├─ ProjectsSection.tsx      # GitHub-style project cards + filter tabs
│     ├─ LabSection.tsx           # Soft skills section
│     ├─ UpdatesSection.tsx       # Latest-updates feed
│     └─ SitePreferencesProvider.tsx  # Theme/language context (localStorage)
├─ data/
│  ├─ profile.ts      # ชื่อ, role, bio, social links, info cards
│  ├─ experiences.ts  # ประสบการณ์ทำงานสองภาษา
│  ├─ projects.ts     # รายการโปรเจกต์ (title, tech, status, repo, link)
│  ├─ skills.ts       # หมวดทักษะเทคนิค
│  ├─ softskills.ts   # soft skills / hobby items
│  └─ updates.ts      # Updates feed (newest first)
├─ lib/
│  └─ contactValidation.ts  # Validate และ normalize ข้อมูล Contact form
├─ public/
│  ├─ profile.jpg     # รูปโปรไฟล์ (วางที่นี่แล้ว avatarImage จะแสดงอัตโนมัติ)
│  └─ projects/       # รูปตัวอย่างผลงาน (SVG, PNG, JPG, WebP, AVIF หรือ GIF)
├─ tests/             # Regression tests: content, security, metadata, accessibility
├─ next.config.ts
├─ package.json
└─ .env.local         # EmailJS public config (ไม่ commit)
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
| `npm test` | Run Node.js regression tests |

ก่อนส่งขึ้น Production แนะนำให้รัน:

```bash
npm test
npm run lint
npx tsc --noEmit
npm audit --audit-level=high
npm run build
```

## 🔒 Security & Contact Validation

- Contact form ตรวจและ trim ข้อมูลก่อนส่งผ่าน EmailJS
- จำกัดชื่อ `80`, อีเมล `254` และข้อความ `2,000` ตัวอักษร
- ปฏิเสธช่องว่างล้วน, email ผิดรูปแบบ และ control characters ที่ไม่ปลอดภัย
- React encode ข้อความตามค่าเริ่มต้น และไม่มีการใช้ `dangerouslySetInnerHTML`
- Response headers มี CSP, HSTS, Referrer Policy, Permissions Policy, `nosniff` และป้องกัน iframe
- CSP อนุญาต `'unsafe-eval'` เฉพาะ development สำหรับ React/Turbopack debugging และปิดใน production
- ปิด `X-Powered-By` เพื่อลดการเปิดเผยข้อมูล framework
- `.env*`, private keys และ generated build files ถูก ignore จาก Git
- `package.json` pin dependency overrides ที่มี security patch; ตรวจด้วย `npm audit`

> เว็บไซต์นี้เป็น Frontend-only จึงไม่มี authentication, database หรือ server-side rate limiting ส่วน EmailJS public key เป็นค่าฝั่ง Client ตามรูปแบบของบริการ ไม่ใช่ secret key

## ✍️ Content Editing Guide

แก้ไขเนื้อหาผ่านไฟล์ใน `data/` — ไม่ต้องแตะ component:

> คู่มือรวมสำหรับหน้า, card, field และรูปภาพ: [`data/README.md`](data/README.md)

| ไฟล์ | แก้อะไร |
|---|---|
| `data/profile.ts` | ชื่อ, role, bio, social links, info cards |
| `data/experiences.ts` | ประสบการณ์ทำงาน, ช่วงเวลา, หน้าที่ และทักษะ |
| `data/projects.ts` | เพิ่ม/ลบ/แก้โปรเจกต์ + tech stack + status |
| `data/skills.ts` | หมวดทักษะเทคนิค |
| `data/softskills.ts` | soft skills / lab section |
| `data/updates.ts` | Updates feed — เพิ่มรายการใหม่ไว้บนสุด (newest first) |

### เพิ่มโปรเจกต์ใหม่ใน `data/projects.ts`

```ts
{
  id: 22,                          // ต้อง unique
  title: "My New Project",
  titleTH: "โปรเจกต์ใหม่ของฉัน",
  description: "What it does, who it serves, and how it helps.",
  descriptionTH: "ระบุว่าทำอะไร สร้างเพื่อใคร และช่วยแก้ปัญหาอย่างไร",
  tech: ["Next.js", "TypeScript"], // tech[0] ใช้แสดง language dot
  status: "Completed",             // "Completed" | "In Progress" | "Coming Soon"
  visibility: "Public",            // optional: "Public" | "Private"
  category: "Web",                 // ชื่อนี้จะขึ้นเป็น filter tab อัตโนมัติ
  image: "/projects/my-app.webp",  // optional — ไฟล์ใน public/projects
  imageAlt: "หน้า Dashboard ของ My App", // ต้องใส่เมื่อมี image
  repo: "https://github.com/...",  // optional
  link: "https://...",             // optional — live demo
  gradient: "from-sky-600 to-slate-700", // ยังคงอยู่ใน type แม้ card ไม่แสดง thumbnail
}
```

### เพิ่มรูปผลงาน

1. วางไฟล์ใน `public/projects/` เช่น `public/projects/my-app.webp`
2. เพิ่ม `image: "/projects/my-app.webp"` ในโปรเจกต์ที่ต้องการ
3. เพิ่ม `imageAlt` เพื่ออธิบายภาพสำหรับผู้ใช้ screen reader

แนะนำภาพอัตราส่วน `16:9` และใช้ WebP/AVIF สำหรับภาพถ่ายหรือ screenshot ส่วน SVG เหมาะกับ illustration และ diagram ที่สร้างจากแหล่งที่เชื่อถือได้ หากไม่กำหนด `image` การ์ดจะแสดง gradient fallback อัตโนมัติ

### เพิ่มรูปใน Soft Skill

วางรูปไว้ใน `public/` หรือโฟลเดอร์ `public/softskills/` จากนั้นแก้รายการใน `data/softskills.ts`:

```ts
{
  id: 8,
  title: "Self Improvement",
  // ข้อมูลอื่น...
  image: "/softskills/self-improvement.webp",
  imageAlt: "กำลังฝึกทักษะและพัฒนาตัวเอง",
  imagePosition: "top", // optional: "top" | "center"
}
```

การ์ดที่ไม่มี `image` จะแสดงแบบเดิมโดยอัตโนมัติ แนะนำภาพอัตราส่วน `16:9`; ใช้ `imagePosition: "top"` สำหรับภาพบุคคลที่ต้องการเน้นใบหน้า

### Motion System

- ทุก section ใช้ `data-reveal` เพื่อแสดงผลแบบ soft fade + slide (opacity + translate เท่านั้น — ไม่มี blur/scale)
- รายการ card ใช้ `getRevealDelay(index)` จาก `lib/motion.ts` เพื่อ stagger ทีละ `80ms` และจำกัดสูงสุด `400ms`
- เพิ่ม class `motion-card` ให้ card ใหม่ เพื่อใช้ gentle lift ตอน hover/focus
- `MotionObserver.tsx` ใช้ observer กลางชุดเดียว และตรวจ card ใหม่หลังเปลี่ยน filter
- `globals.css` มี ambient layers แบบ **static** 2 ชั้น (`body::before` colour wash, `body::after` dot-grid) — ไม่มี blur / animation / `background-attachment: fixed` เพื่อให้เบาบนเครื่องสเปกต่ำ
- helper: `.text-gradient`, `.accent-bar`, `.section-index`, `.status-dot`, `.avatar-ring` (gradient ring แบบ static), `.scroll-progress`
- accent gradient คุมด้วย CSS variables (`--grad-a/b/c`) แยกค่าตามธีม light/dark
- ไม่มี animation ที่วนตลอด (loop) — เอฟเฟกต์ทั้งหมดเกิดเฉพาะตอน reveal / hover / scroll
- ผู้ใช้ที่ตั้งค่า `prefers-reduced-motion: reduce` จะเห็นเนื้อหาทันทีโดยไม่มีการเคลื่อนไหว

### เปลี่ยนรูปโปรไฟล์

วางไฟล์รูปที่ `public/profile.jpg` — แสดงผลอัตโนมัติ (ตั้งค่าใน `data/profile.ts → avatarImage`)

## ⚡ Performance Notes

| สิ่งที่ optimize แล้ว | รายละเอียด |
|---|---|
| `react-icons` tree-shaking | `optimizePackageImports` ใน `next.config.ts` |
| EmailJS lazy load | `await import("@emailjs/browser")` เฉพาะตอนกดส่ง form |
| Project previews | แปลง screenshot 7 ภาพเป็น WebP: `11,061,434` → `322,670` bytes (ลด `97.1%`) |
| Image budget guard | Regression test จำกัด featured preview ไม่เกิน `300 KB` ต่อภาพ |
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
- [x] Lightweight scroll reveal + card lift animations
- [x] Ambient background + scroll progress + Updates feed
- [ ] SEO meta + Open Graph image
- [ ] Resume / CV download (PDF)

---

Built with ☕ and persistence.
