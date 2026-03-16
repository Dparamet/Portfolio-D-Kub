// app/product/page.tsx

export default function ProductPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">MY_PROJECTS</h1>
      <div className="grid gap-4">
        {/* Bare Minimum: ใส่แค่ชื่อโปรเจกต์ไว้ก่อนตามแผน MVP */}
        <div className="p-4 bg-slate-800 border border-slate-700 rounded">
          <h2 className="text-xl">Project 1: E-commerce Website (Coming Soon)</h2>
        </div>
        <div className="p-4 bg-slate-800 border border-slate-700 rounded">
          <h2 className="text-xl">Project 2: IoT Dashboard (Coming Soon)</h2>
        </div>
      </div>
    </div>
  );
}