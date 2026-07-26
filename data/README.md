# Portfolio Content Guide

ไฟล์ในโฟลเดอร์ `data/` คือจุดหลักสำหรับเพิ่มหรือแก้เนื้อหา Portfolio  
โดยทั่วไปไม่ต้องแก้ JSX ใน `app/` หากต้องการเปลี่ยนเฉพาะข้อความ รายการ การ์ด หรือลิงก์

## แผนที่ส่วนต่าง ๆ ของเว็บไซต์

| ส่วนบนหน้าเว็บ | URL | ไฟล์ข้อมูล | ไฟล์ UI | ตำแหน่งรูป |
|---|---|---|---|---|
| Hero / About / Contact | `/#home`, `/#about`, `/#contact` | `data/profile.ts` | `app/page.tsx` | `public/profile.jpg` |
| Skills | `/#about` | `data/skills.ts` | `app/page.tsx` | ไม่มีรูป |
| Projects | `/#projects` | `data/projects.ts` | `app/components/ProjectsSection.tsx` | `public/projects/` |
| Soft Skills / Hobby | `/#soft-skill` | `data/lab.ts` | `app/components/LabSection.tsx` | `public/soft-skills/` หรือไฟล์อื่นใน `public/` |

## เลือกไฟล์ให้ถูกก่อนแก้

- เปลี่ยนข้อความ รายการ ลิงก์ หรือรูป: แก้ไฟล์ใน `data/`
- เปลี่ยนหน้าตา Project card: แก้ `app/components/ProjectsSection.tsx`
- เปลี่ยนการ crop หรือ fallback ของรูป Project: แก้ `app/components/ProjectThumbnail.tsx`
- เปลี่ยนหน้าตา Soft Skill card: แก้ `app/components/LabSection.tsx`
- เปลี่ยนการ crop หรือ fallback ของรูป Soft Skill: แก้ `app/components/SoftSkillThumbnail.tsx`
- เปลี่ยนโครงหน้า Hero, About, Skills หรือ Contact: แก้ `app/page.tsx`
- เปลี่ยน theme/language controls: แก้ component ใน `app/components/`

หลักการคือให้ `data/` เก็บ content และให้ `app/` เก็บ layout, style และ interaction

## ขั้นตอนเพิ่มข้อมูลทั่วไป

1. เปิดไฟล์ข้อมูลของ section ที่ต้องการ
2. เลื่อนไปท้าย array และคัดลอก block ในหัวข้อ `HOW TO ADD`
3. เปลี่ยน `id` ให้ไม่ซ้ำกับรายการเดิม
4. กรอกข้อมูลที่จำเป็น
5. หากมีรูป ให้วางไฟล์ไว้ใน `public/` และกรอกทั้ง `image` กับ `imageAlt`
6. ตรวจด้วยคำสั่ง:

```bash
npm test
npm run lint
npm run build
```

## กฎการใช้รูป

- Path ในโค้ดเริ่มจาก `/` และอ้างจากโฟลเดอร์ `public/`
- ตัวอย่างไฟล์จริง: `public/projects/weather.webp`
- Path ที่กรอกในข้อมูล: `"/projects/weather.webp"`
- รองรับ `avif`, `gif`, `jpg`, `jpeg`, `png`, `svg` และ `webp`
- แนะนำ WebP/AVIF สำหรับ screenshot หรือภาพถ่าย
- ใช้ SVG จากแหล่งที่เชื่อถือได้เท่านั้น
- ทุก `image` ต้องมี `imageAlt` ที่อธิบายสิ่งสำคัญในภาพ
- แนะนำอัตราส่วน `16:9` เพื่อให้ card มีขนาดสม่ำเสมอ

## เพิ่ม Project Card

แก้ `data/projects.ts`:

```ts
{
  id: 22,
  title: "My New Project",
  titleTH: "โปรเจกต์ใหม่ของฉัน",
  description: "Explain who it serves, what it does, and how it solves the problem.",
  descriptionTH: "ระบุว่าใครเป็นผู้ใช้ โปรเจกต์ทำอะไร และแก้ปัญหาอย่างไร",
  tech: ["Next.js", "TypeScript"],
  status: "Completed",
  category: "Web",
  image: "/projects/my-new-project.webp",
  imageAlt: "หน้า Dashboard ของ My New Project",
  gradient: "from-sky-600 to-slate-800",
  role: "Project Lead",
  roleTH: "หัวหน้าโครงการ",
  period: "May 2026 – Present",
  periodTH: "พฤษภาคม 2569 – ปัจจุบัน",
  link: "https://example.com",
  repo: "https://github.com/username/repository",
}
```

หมายเหตุ:

- `category` จะสร้าง filter tab อัตโนมัติ
- `link` และ `repo` ไม่บังคับ
- `role` และ `period` ไม่บังคับ เหมาะสำหรับ Project ที่เป็นประสบการณ์ทำงาน
- `titleTH` และ `descriptionTH` คือข้อความที่แสดงเมื่อเลือกภาษาไทย
- เขียนคำอธิบายแบบ 5W1H โดยเน้น `Who`, `What`, `Why` และ `How` ที่สำคัญ ไม่เกินประมาณ 180 ตัวอักษร
- `gradient` ใช้เป็น fallback เมื่อไม่มี `image`
- `status` ใช้ได้เฉพาะ `"Completed"`, `"In Progress"` หรือ `"Coming Soon"`

## เพิ่ม Soft Skill Card

แก้ `data/lab.ts`:

```ts
{
  id: 11,
  title: "Time Management",
  titleTH: "การบริหารเวลา",
  description: "Explain the skill and how it supports real work.",
  descriptionTH: "อธิบายทักษะและวิธีนำไปใช้กับงานจริงอย่างกระชับ",
  focus: "Prioritization",
  focusTH: "การจัดลำดับความสำคัญ",
  level: "Growing",
  category: "Leadership",
  image: "/soft-skills/time-management.webp",
  imageAlt: "กำลังวางแผนและจัดลำดับงาน",
  imagePosition: "top",
  link: "https://example.com",
}
```

หมายเหตุ:

- `category` จะสร้าง filter tab อัตโนมัติ
- `titleTH`, `descriptionTH` และ `focusTH` คือข้อความที่แสดงเมื่อเลือกภาษาไทย
- คำอธิบายควรกระชับ ไม่เกินประมาณ 160 ตัวอักษร เพื่อรักษาความสูงของการ์ด
- `image`, `imageAlt`, `imagePosition` และ `link` ไม่บังคับ
- หากใส่ `image` ต้องใส่ `imageAlt`
- `imagePosition` ใช้ `"top"` เพื่อเน้นช่วงบนของภาพบุคคล หรือ `"center"` สำหรับภาพทั่วไป
- `level` ใช้ได้เฉพาะ `"Strong"`, `"Growing"` หรือ `"Practice"`

## เพิ่ม Skill Group

แก้ `data/skills.ts`:

```ts
{
  category: "Databases",
  items: ["PostgreSQL", "MySQL", "Supabase"],
}
```

หากต้องการเพิ่ม skill ในกลุ่มเดิม ให้เพิ่มข้อความใน `items` ของกลุ่มนั้น

## แก้ข้อมูลส่วนตัว

แก้ `data/profile.ts`:

- `name`, `nameTH`, `role`, `tagline`: ข้อความใน Hero
- `avatar`: ตัวอักษร fallback เมื่อไม่มีรูป
- `avatarImage`: รูปโปรไฟล์ใน `public/`
- `info`: การ์ดข้อมูลใน About
- `links`: Social links และข้อมูล Contact

เมื่อเพิ่ม label ใหม่ใน `info` และต้องการคำแปลภาษาไทย ให้เพิ่มคำแปลใน `infoLabelTH` ภายใน `app/page.tsx`
