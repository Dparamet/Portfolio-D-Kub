"use client";

// app/contact/page.tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";
import { profile } from "@/data/profile";

type SubmitState = "idle" | "sending" | "success" | "error";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const links: {
  label: string;
  value: string;
  href: string;
  color: string;
  labelColor: string;
  Icon: IconType;
  openInNewTab: boolean;
}[] = [
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    color: "border-violet-100 hover:border-violet-300",
    labelColor: "text-violet-500",
    Icon: FaEnvelope,
    openInNewTab: false,
  },
  {
    label: "GitHub",
    value: profile.links.github.replace("https://", ""),
    href: profile.links.github,
    color: "border-gray-200 hover:border-gray-400",
    labelColor: "text-gray-700",
    Icon: FaGithub,
    openInNewTab: true,
  },
  {
    label: "Facebook",
    value: profile.links.facebook.replace("https://", ""),
    href: profile.links.facebook,
    color: "border-blue-100 hover:border-blue-300",
    labelColor: "text-blue-600",
    Icon: FaFacebook,
    openInNewTab: true,
  },
  {
    label: "Instagram",
    value: profile.links.instagram.replace("https://", ""),
    href: profile.links.instagram,
    color: "border-pink-100 hover:border-pink-300",
    labelColor: "text-pink-500",
    Icon: FaInstagram,
    openInNewTab: true,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState("error");
      setFeedback("ยังไม่ได้ตั้งค่า EmailJS ในไฟล์ .env ให้ครบ");
      return;
    }

    try {
      setSubmitState("sending");
      setFeedback("");

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          name: formData.from_name,
          email: formData.from_email,
          title: `New message from ${formData.from_name}`,
          time: new Date().toLocaleString("th-TH"),
        },
        { publicKey }
      );

      setSubmitState("success");
      setFeedback("ส่งข้อความเรียบร้อยแล้ว 🎉");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch {
      setSubmitState("error");
      setFeedback("ส่งข้อความไม่สำเร็จ ลองใหม่อีกครั้งนะครับ");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-4"></div>
      <p className="text-gray-500 mb-10">
        Want to work together or just say hi? Feel free to reach out!
      </p>

      {/* Social / contact links */}
      <div className="space-y-4 mb-12">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.openInNewTab ? "_blank" : undefined}
            rel={link.openInNewTab ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-between p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all ${link.color}`}
          >
            <span className={`font-semibold flex items-center gap-2 ${link.labelColor}`}>
              <link.Icon className="text-base" />
              {link.label}
            </span>
            <span className="text-sm text-gray-500">{link.value}</span>
          </a>
        ))}
      </div>

      {/* Message form */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-violet-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Send a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What&apos;s on your mind?"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="w-full py-3 bg-violet-500 text-white rounded-xl font-semibold hover:bg-violet-600 transition-colors"
          >
            {submitState === "sending" ? "Sending..." : "Send Message"}
          </button>
          {feedback && (
            <p className={`text-sm ${submitState === "success" ? "text-emerald-600" : "text-red-500"}`}>
              {feedback}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
