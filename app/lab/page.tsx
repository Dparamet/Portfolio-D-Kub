// app/lab/page.tsx

const miniProjects = [
  {
    id: 1,
    title: "Calculator",
    description: "A clean calculator built with pure Vanilla JS — no frameworks, just raw logic.",
    status: "Coming Soon",
    tech: "Vanilla JS",
    cardColor: "border-teal-100 hover:border-teal-300",
    tagColor: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    id: 2,
    title: "Todo List",
    description: "A simple todo app with local storage persistence, add/remove/complete tasks.",
    status: "Coming Soon",
    tech: "Vanilla JS",
    cardColor: "border-pink-100 hover:border-pink-300",
    tagColor: "bg-pink-50 text-pink-600 border-pink-100",
  },
];

export default function LabPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">The Lab</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-4"></div>
      <p className="text-gray-500 mb-10">
        My playground for experimenting with logic and building mini-projects using Vanilla JS — no frameworks, just raw code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {miniProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all ${project.cardColor}`}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">{project.status}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
            <span className={`px-2 py-1 border rounded text-xs font-medium ${project.tagColor}`}>
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}