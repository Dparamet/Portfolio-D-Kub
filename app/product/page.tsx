// app/product/page.tsx

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with product listings, cart, and checkout flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-600",
  },
  {
    id: 2,
    title: "IoT Dashboard",
    description: "A real-time dashboard for monitoring IoT sensor data with live charts and alerts.",
    tech: ["React", "Node.js", "IoT"],
    status: "Coming Soon",
    statusColor: "bg-sky-100 text-sky-600",
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Projects</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-4"></div>
      <p className="text-gray-500 mb-10">Things I&apos;ve built or am currently working on.</p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 hover:shadow-md hover:border-violet-300 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}