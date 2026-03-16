// app/aboutme/page.tsx

export default function AboutMePage() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">ABOUT_ME</h1>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <p className="text-slate-300 leading-relaxed mb-4">
          Yo! ผมคือ Dev สายลุยที่ชอบแก้ปัญหาด้วย Logic 
          ตอนนี้กำลังสร้าง Portfolio แบบ Hybrid เพื่อโชว์ทั้งกึ๋นของ Vanilla JS 
          และความรวดเร็วของ Next.js Framework ครับ
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-900 p-3 rounded border border-cyan-500/30">
            <span className="text-cyan-400 font-bold block">Focus</span>
            <span className="text-sm">Web & IoT</span>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-cyan-500/30">
            <span className="text-cyan-400 font-bold block">Learning</span>
            <span className="text-sm">TypeScript & Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}