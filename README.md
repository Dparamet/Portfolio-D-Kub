# Portfolio Website

Modern portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

โปรเจกต์นี้เป็นเว็บ Portfolio แบบหน้าเดียว (single-page sections) พร้อมธีมสว่าง/มืด, รองรับ 2 ภาษา (ไทย/อังกฤษ), และระบบส่งข้อความผ่าน EmailJS

## ✨ Features

- 🌗 Toggle ธีม **Light / Dark**
- 🌍 Toggle ภาษา **ไทย / English**
- 🧭 Floating navigation (desktop + mobile)
- 🧩 Sections หลัก: Home, About, Projects, Soft Skills, Contact
- 🗂️ Filter โปรเจกต์ตามหมวดหมู่
- 📨 Contact form ส่งข้อความผ่าน **EmailJS**
- 📦 แยกข้อมูลคอนเทนต์ไว้ใน `data/` เพื่อแก้ไขง่าย

## 🛠 Tech Stack

- **Framework:** Next.js `16.1.6`
- **UI:** React `19.2.3`
- **Language:** TypeScript
- **Styling:** Tailwind CSS `v4`
- **Email Service:** `@emailjs/browser`
- **Icons:** `react-icons`
- **Lint:** ESLint

## 📁 Project Structure

```text
portfolio/
├─ app/
│  ├─ page.tsx                # หน้า Portfolio หลัก (single-page sections)
│  ├─ aboutme/page.tsx        # หน้า About แยก
│  ├─ contact/page.tsx
│  ├─ lab/page.tsx
│  ├─ product/page.tsx
│  └─ components/
│     ├─ FloatingNav.tsx
│     ├─ PreferenceControls.tsx
│     ├─ ProjectsSection.tsx
│     └─ SitePreferencesProvider.tsx
├─ data/
│  ├─ profile.ts              # ข้อมูลโปรไฟล์และ social links
│  ├─ projects.ts             # รายการโปรเจกต์
│  ├─ skills.ts               # ทักษะด้านเทคนิค
│  ├─ softSkills.ts / lab.ts  # ข้อมูล soft skills/lab
│  └─ ...
├─ public/
├─ package.json
└─ README.md
```

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

สร้างไฟล์ `.env.local` ที่โฟลเดอร์ `portfolio/` แล้วกำหนดค่าดังนี้:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> หมายเหตุ: ค่า `NEXT_PUBLIC_*` จะถูกใช้งานฝั่ง client ได้ ควรใช้เฉพาะ key ที่ตั้งใจเปิดเผยได้ และอย่าใส่ secret ที่ sensitive

### 3) Run development server

```bash
npm run dev
```

เปิดที่: [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## ✍️ Content Editing Guide

ถ้าต้องการแก้ข้อมูลในหน้าเว็บ แนะนำแก้จากไฟล์ใน `data/`:

- `data/profile.ts` → ชื่อ, ตำแหน่ง, bio, social links
- `data/projects.ts` → เพิ่ม/ลบ/แก้โปรเจกต์
- `data/skills.ts` → หมวดทักษะ
- `data/lab.ts` / `data/softSkills.ts` → soft skills และข้อมูลในส่วน lab

## 🧪 Build & Lint Check

ก่อน deploy แนะนำรัน:

```bash
npm run lint
npm run build
```

## ☁️ Deployment

สามารถ deploy ได้หลายแพลตฟอร์ม เช่น:

- Vercel (แนะนำสำหรับ Next.js)
- Netlify
- VPS / Docker

อย่าลืมตั้งค่า Environment Variables บนแพลตฟอร์มปลายทางให้ครบเหมือน `.env.local`

## 📌 Notes

- โปรเจกต์นี้ใช้ App Router (`app/` directory)
- ถ้าแก้ `.env.local` ให้ **restart dev server** ทุกครั้ง

---

Built with ☕ and persistence.
