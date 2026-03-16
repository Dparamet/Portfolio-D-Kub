// app/lab/page.tsx

import { softSkills } from "@/data/lab";

export default function SoftSkillPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Soft Skill</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-4"></div>
      <p className="text-gray-500 mb-10">
        Core soft skills I use in projects, plus hobby areas that keep my mindset creative.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkills.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">{item.level}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
            <span className="px-2 py-1 border rounded text-xs font-medium bg-violet-50 text-violet-600 border-violet-100 mr-2">
              {item.category}
            </span>
            <span className="px-2 py-1 border rounded text-xs font-medium bg-sky-50 text-sky-600 border-sky-100">
              {item.focus}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}