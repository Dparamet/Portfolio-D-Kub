// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8 uppercase">Let's Talk!</h1>
      
      <div className="w-full max-w-md space-y-4">
        {/* ช่องทางติดต่อที่ 1: Email */}
        <div className="p-6 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-400 transition-all group">
          <h2 className="text-sm text-slate-400 uppercase tracking-widest mb-1">Email</h2>
          <p className="text-xl font-mono text-white group-hover:text-cyan-400">yourname@email.com</p>
        </div>

        {/* ช่องทางติดต่อที่ 2: GitHub / Social */}
        <div className="p-6 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-400 transition-all group">
          <h2 className="text-sm text-slate-400 uppercase tracking-widest mb-1">GitHub</h2>
          <a href="https://github.com/yourusername" target="_blank" className="text-xl font-mono text-white group-hover:text-cyan-400">
            github.com/yourusername →
          </a>
        </div>
      </div>

      <p className="mt-12 text-slate-500 text-sm">
        *หน้านี้เป็นเวอร์ชั่น MVP ยังไม่ได้ใส่ระบบรับข้อความ (Contact Form)
      </p>
    </div>
  );
}