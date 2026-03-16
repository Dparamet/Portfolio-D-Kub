// app/lab/page.tsx

export default function LabPage() {
  const miniProjects = [
    { id: 1, title: "Calculator", status: "Coming Soon", tech: "Vanilla JS" },
    { id: 2, title: "Todo List", status: "Coming Soon", tech: "Vanilla JS" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 underline">/ THE_LAB</h1>
      <p className="text-slate-300 mb-8">นี่คือพื้นที่โชว์กึ๋น Logic การเขียน Code ด้วย Vanilla JS ล้วนๆ ของผม</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {miniProjects.map((project) => (
          <div key={project.id} className="p-6 border border-slate-700 bg-slate-800 rounded-xl hover:border-cyan-400 transition-colors">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded text-cyan-300">{project.tech}</span>
            <p className="mt-4 text-slate-500 italic">{project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}