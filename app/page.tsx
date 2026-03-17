"use client";

// ============================================================
//  page.tsx  — Main single-page portfolio
//  To edit content, update the files in /data/ instead of here
// ============================================================

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { profile } from "@/data/profile";
import { skills }  from "@/data/skills";
import { projects } from "@/data/projects";
import { softSkills } from "@/data/lab";
import ProjectsSection from "@/app/components/ProjectsSection";
import SoftSkillsSection from "@/app/components/LabSection";
import { useSitePreferences } from "@/app/components/SitePreferencesProvider";

const infoLabelTH: Record<string, string> = {
  Role: "บทบาท",
  Location: "ที่อยู่",
  Email: "อีเมล",
  Status: "สถานะ",
};

const infoValueTH: Record<string, string> = {
  "Web Developer": "นักพัฒนาเว็บ",
  "Developer & IoT & AI": "นักพัฒนา IoT และ AI",
  Thailand: "ประเทศไทย",
  "Open to Work ✓": "พร้อมรับงาน ✓",
};

const skillCategoryTH: Record<string, string> = {
  Frontend: "ฝั่งหน้าเว็บ",
  "Backend & Tools": "ฝั่งหลังบ้านและเครื่องมือ",
  "Other Interests": "ความสนใจอื่น ๆ",
};

type ContactFormData = {
  from_name: string;
  from_email: string;
  message: string;
};

type ContactSubmitState = "idle" | "sending" | "success" | "error";

const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function HomePage() {
  const { language, theme } = useSitePreferences();
  const isThai = language === "th";
  const isLight = theme === "light";
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [contactSubmitState, setContactSubmitState] = useState<ContactSubmitState>("idle");
  const [contactFeedback, setContactFeedback] = useState("");

  const text = isThai
    ? {
        hello: "สวัสดี ผมคือ",
        role: "นักพัฒนาเว็บ และผู้เรียนรู้",
        tagline:
          "ผมชอบสร้างงานเว็บที่ใช้งานได้จริง เน้นโค้ดอ่านง่าย ดูแลง่าย และพัฒนาต่อได้เสมอ ตอนนี้กำลังโฟกัสที่ TypeScript และ Next.js",
        viewWork: "ดูผลงาน",
        contactMe: "ติดต่อผม",
        stats: {
          mainProjects: "โปรเจกต์หลัก",
          softSkillItems: "ซอฟต์สกิล",
          skillGroups: "หมวดทักษะ",
        },
        about: "เกี่ยวกับผม",
        aboutBio:
          "ผมเป็นคนที่ชอบเรียนรู้ด้วยการลงมือทำจริง ชอบสร้างระบบเว็บที่ทั้งสวยและใช้งานง่าย ตอนนี้กำลังพัฒนาทักษะด้าน TypeScript, Next.js และงานฝั่ง IoT เพื่อให้ทำโปรเจกต์ได้ครบมากขึ้น",
        skills: "ทักษะ",
        contact: "ติดต่อ",
        contactSub: "ถ้าสนใจร่วมงานหรืออยากคุยเรื่องโปรเจกต์ ทักมาได้เลยครับ",
        email: "อีเมล",
        facebook: "เฟซบุ๊ก",
        instagram: "อินสตาแกรม",
        sendMessage: "ส่งข้อความ",
        name: "ชื่อ",
        message: "ข้อความ",
        yourName: "ชื่อของคุณ",
        yourEmail: "อีเมลของคุณ",
        yourMessage: "พิมพ์ข้อความที่นี่...",
      }
    : {
      hello: "Hello, I'm",
        role: profile.role,
        tagline: profile.tagline,
        viewWork: "View My Work",
        contactMe: "Contact Me",
        stats: {
          mainProjects: "Main Projects",
          softSkillItems: "Soft Skills",
          skillGroups: "Skill Groups",
        },
        about: "About Me",
        aboutBio:
          "Hey! I'm a self-driven developer who loves building things for the web. I'm currently focusing on mastering TypeScript and Next.js while exploring IoT. I believe in learning by doing — every project is a chance to grow.",
        skills: "Skills",
        contact: "Contact",
        contactSub: "Want to work together or just say hi? Feel free to reach out!",
        email: "Email",
        facebook: "Facebook",
        instagram: "Instagram",
        sendMessage: "Send Message",
        name: "Name",
        message: "Message",
        yourName: "Your name",
        yourEmail: "your@email.com",
        yourMessage: "Type your message here...",
      };

  const contactMessages = isThai
    ? {
        missingConfig: "ยังไม่ได้ตั้งค่า EmailJS ในไฟล์ .env ให้ครบ",
        success: "ส่งข้อความเรียบร้อยแล้ว 🎉",
        failed: "ส่งข้อความไม่สำเร็จ ลองใหม่อีกครั้งนะครับ",
      }
    : {
        missingConfig: "EmailJS is not configured yet. Please check your .env file.",
        success: "Your message has been sent successfully 🎉",
        failed: "Failed to send message. Please try again.",
      };

  const handleContactChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setContactSubmitState("error");
      setContactFeedback(contactMessages.missingConfig);
      return;
    }

    try {
      setContactSubmitState("sending");
      setContactFeedback("");

      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: contactFormData.from_name,
          from_email: contactFormData.from_email,
          message: contactFormData.message,
          name: contactFormData.from_name,
          email: contactFormData.from_email,
          title: `New message from ${contactFormData.from_name}`,
          time: new Date().toLocaleString("th-TH"),
        },
        {
          publicKey: emailjsPublicKey,
        }
      );

      setContactSubmitState("success");
      setContactFeedback(contactMessages.success);
      setContactFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch {
      setContactSubmitState("error");
      setContactFeedback(contactMessages.failed);
    }
  };

  const highlightStats = [
    { label: text.stats.mainProjects, value: projects.length },
    { label: text.stats.softSkillItems, value: softSkills.length },
    { label: text.stats.skillGroups, value: skills.length },
  ];

  return (
    <div>
      {/* ──────────────── HOME ──────────────── */}
      <section
        id="home"
        className={`scroll-mt-16 min-h-[92vh] flex items-center px-6 md:px-20 py-20 ${
          isLight
            ? "bg-gradient-to-br from-slate-50 via-white to-sky-50"
            : "bg-gradient-to-br from-black via-zinc-950 to-slate-900"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className={`font-semibold tracking-widest uppercase text-sm mb-3 ${isLight ? "text-sky-600" : "text-sky-300"}`}>
              {text.hello}
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>
              {profile.name}
            </h1>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-5 ${isLight ? "text-sky-600" : "text-sky-300"}`}>
              {text.role}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-lg ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
              {text.tagline}
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mb-5">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-xl font-semibold transition-colors shadow-md ${
                  isLight
                    ? "bg-sky-600 text-white hover:bg-sky-500 shadow-sky-300/40"
                    : "bg-sky-400 text-black hover:bg-sky-300 shadow-sky-900/30"
                }`}
              >
                {text.viewWork}
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 border-2 rounded-xl font-semibold transition-colors ${
                  isLight
                    ? "bg-white text-slate-700 border-slate-300 hover:border-sky-500"
                    : "bg-zinc-900 text-zinc-100 border-zinc-700 hover:border-sky-400"
                }`}
              >
                {text.contactMe}
              </a>
            </div>

            {/* Quick glance stats */}
            <div className="grid grid-cols-3 gap-3 mb-7 max-w-md">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border px-3 py-2 text-center shadow-sm ${
                    isLight
                      ? "border-slate-200 bg-white"
                      : "border-zinc-700 bg-zinc-900/70"
                  }`}
                >
                  <p className={`text-lg font-bold leading-none ${isLight ? "text-sky-600" : "text-sky-300"}`}>{stat.value}</p>
                  <p className={`text-[11px] sm:text-xs mt-1 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isLight
                    ? "bg-white text-slate-700 border-slate-300 hover:border-sky-500"
                    : "bg-zinc-900 text-zinc-200 border-zinc-700 hover:border-sky-400"
                }`}
              >
                <FaGithub className="text-base" /> GitHub
              </a>
              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isLight
                    ? "bg-white text-blue-600 border-blue-200 hover:border-blue-400"
                    : "bg-zinc-900 text-blue-400 border-zinc-700 hover:border-blue-400"
                }`}
              >
                <FaFacebook className="text-base" /> {text.facebook}
              </a>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isLight
                    ? "bg-white text-pink-600 border-pink-200 hover:border-pink-400"
                    : "bg-zinc-900 text-pink-400 border-zinc-700 hover:border-pink-400"
                }`}
              >
                <FaInstagram className="text-base" /> {text.instagram}
              </a>
              <a
                href={`mailto:${profile.links.email}`}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isLight
                    ? "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100"
                    : "bg-sky-950/30 text-sky-200 border-sky-500/30 hover:bg-sky-900/40"
                }`}
              >
                <FaEnvelope className="text-base" /> {text.email}
              </a>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`relative w-60 h-60 rounded-full overflow-hidden flex items-center justify-center shadow-2xl ${
                  isLight
                    ? "bg-gradient-to-br from-sky-500 to-cyan-400 shadow-sky-300/30"
                    : "bg-gradient-to-br from-sky-600 to-slate-700 shadow-black/70"
                }`}
              >
                {profile.avatarImage ? (
                  <Image
                    src={profile.avatarImage}
                    alt={`${profile.name} profile photo`}
                    fill
                    sizes="240px"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <span className="text-7xl font-extrabold text-white select-none">
                    {profile.avatar}
                  </span>
                )}
              </div>
              <div
                className={`absolute -inset-4 rounded-full border-2 border-dashed animate-spin ${
                  isLight ? "border-sky-400/60" : "border-sky-400/40"
                }`}
                style={{ animationDuration: "18s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── ABOUT ──────────────── */}
      <section id="about" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-slate-50" : "bg-black"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{text.about}</h2>
          <div className="w-16 h-1 bg-sky-400 rounded mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio + personal info cards — edit profile.info in /data/profile.ts */}
            <div>
              <p className={`leading-relaxed text-lg mb-8 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                {text.aboutBio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {profile.info.map((item) => (
                  <div
                    key={item.label}
                    className={`p-4 rounded-xl border ${
                      isLight
                        ? "bg-white border-slate-200"
                        : "bg-zinc-900 border-zinc-700"
                    }`}
                  >
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isLight ? "text-sky-600" : "text-sky-300"}`}>
                      {isThai ? (infoLabelTH[item.label] ?? item.label) : item.label}
                    </p>
                    <p className={`font-medium text-sm ${isLight ? "text-slate-700" : "text-zinc-200"}`}>
                      {isThai ? (infoValueTH[item.value] ?? item.value) : item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills — edit /data/skills.ts */}
            <div className="space-y-6">
              <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{text.skills}</h3>
              {skills.map((group) => (
                <div key={group.category}>
                  <p className={`text-xs font-semibold mb-3 uppercase tracking-widest ${isLight ? "text-sky-600" : "text-sky-300"}`}>
                    {isThai ? (skillCategoryTH[group.category] ?? group.category) : group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 border rounded-full text-sm font-medium shadow-sm ${
                          isLight
                            ? "bg-white text-slate-700 border-slate-200"
                            : "bg-zinc-900 text-zinc-200 border-zinc-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── PROJECTS (with filter) ──────────────── */}
      {/* Edit projects in /data/projects.ts */}
      <ProjectsSection />

      {/* ──────────────── SOFT SKILL (with filter) ──────────────── */}
      {/* Edit soft skills & hobby in /data/lab.ts */}
      <SoftSkillsSection />

      {/* ──────────────── CONTACT ──────────────── */}
      {/* Edit links in /data/profile.ts → profile.links */}
      <section id="contact" className={`scroll-mt-16 py-20 px-6 md:px-20 ${isLight ? "bg-slate-100" : "bg-zinc-900"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{text.contact}</h2>
          <div className="w-16 h-1 bg-sky-400 rounded mb-4" />
          <p className={`mb-10 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
            {text.contactSub}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Links — driven by profile.links */}
            <div className="space-y-4">
              <a
                href={`mailto:${profile.links.email}`}
                className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm hover:border-sky-400/70 hover:shadow-md transition-all ${
                  isLight
                    ? "bg-white border-slate-200"
                    : "bg-zinc-950 border-zinc-700"
                }`}
              >
                <span className={`font-semibold flex items-center gap-2 ${isLight ? "text-sky-600" : "text-sky-300"}`}><FaEnvelope /> {text.email}</span>
                <span className={`text-sm break-all text-right ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{profile.links.email}</span>
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm hover:border-sky-400/70 hover:shadow-md transition-all ${
                  isLight
                    ? "bg-white border-slate-200"
                    : "bg-zinc-950 border-zinc-700"
                }`}
              >
                <span className={`font-semibold flex items-center gap-2 ${isLight ? "text-slate-700" : "text-zinc-200"}`}><FaGithub /> GitHub</span>
                <span className={`text-sm break-all text-right ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                  {profile.links.github.replace("https://", "")}
                </span>
              </a>
              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm hover:border-blue-400/70 hover:shadow-md transition-all ${
                  isLight
                    ? "bg-white border-slate-200"
                    : "bg-zinc-950 border-zinc-700"
                }`}
              >
                <span className={`font-semibold flex items-center gap-2 ${isLight ? "text-blue-600" : "text-blue-400"}`}><FaFacebook /> {text.facebook}</span>
                <span className={`text-sm break-all text-right ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                  {profile.links.facebook.replace("https://", "")}
                </span>
              </a>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm hover:border-pink-400/70 hover:shadow-md transition-all ${
                  isLight
                    ? "bg-white border-slate-200"
                    : "bg-zinc-950 border-zinc-700"
                }`}
              >
                <span className={`font-semibold flex items-center gap-2 ${isLight ? "text-pink-600" : "text-pink-400"}`}><FaInstagram /> {text.instagram}</span>
                <span className={`text-sm break-all text-right ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                  {profile.links.instagram.replace("https://", "")}
                </span>
              </a>
            </div>

            {/* Contact form */}
            <div className={`rounded-2xl p-8 shadow-sm border ${
              isLight
                ? "bg-white border-slate-200"
                : "bg-zinc-950 border-zinc-700"
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${isLight ? "text-slate-900" : "text-zinc-100"}`}>{text.sendMessage}</h3>
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{text.name}</label>
                  <input
                    type="text"
                    name="from_name"
                    value={contactFormData.from_name}
                    onChange={handleContactChange}
                    required
                    placeholder={text.yourName}
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-sky-400 placeholder-zinc-500 ${
                      isLight
                        ? "border-slate-300 text-slate-800 bg-white"
                        : "border-zinc-700 text-zinc-100 bg-zinc-900"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{text.email}</label>
                  <input
                    type="email"
                    name="from_email"
                    value={contactFormData.from_email}
                    onChange={handleContactChange}
                    required
                    placeholder={text.yourEmail}
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-sky-400 placeholder-zinc-500 ${
                      isLight
                        ? "border-slate-300 text-slate-800 bg-white"
                        : "border-zinc-700 text-zinc-100 bg-zinc-900"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{text.message}</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    required
                    placeholder={text.yourMessage}
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-sky-400 placeholder-zinc-500 resize-none ${
                      isLight
                        ? "border-slate-300 text-slate-800 bg-white"
                        : "border-zinc-700 text-zinc-100 bg-zinc-900"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactSubmitState === "sending"}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    isLight
                      ? "bg-sky-600 text-white hover:bg-sky-500"
                      : "bg-sky-400 text-black hover:bg-sky-300"
                  }`}
                >
                  {contactSubmitState === "sending"
                    ? (isThai ? "กำลังส่ง..." : "Sending...")
                    : text.sendMessage}
                </button>
                {contactFeedback && (
                  <p
                    className={`text-sm ${
                      contactSubmitState === "success"
                        ? (isLight ? "text-emerald-600" : "text-emerald-300")
                        : (isLight ? "text-red-600" : "text-red-300")
                    }`}
                  >
                    {contactFeedback}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className={`text-center py-6 text-sm border-t ${
        isLight
          ? "text-slate-500 bg-white border-slate-200"
          : "text-zinc-500 bg-black border-zinc-800"
      }`}>
        &copy; 2026 {profile.name} &middot; Built with Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
