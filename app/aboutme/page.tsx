// app/aboutme/page.tsx

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "Java", "C", "C++ (Arduino)", "SQL"] },
  { category: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Node.js"] },
  { category: "Hardware", items: ["ESP32", "Arduino"] },
  { category: "Design / Video", items: ["Video Editing"] },
];

export default function AboutMePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">About Me</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-10"></div>

      {/* Bio */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-violet-100 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Who am I?</h2>
        <p className="text-gray-600 leading-relaxed">
          Hey! I&apos;m a self-driven developer who loves building things for the web.
          I&apos;m currently focusing on mastering TypeScript and Next.js while exploring the world of IoT.
          I believe in learning by doing — every project is a chance to grow.
        </p>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-violet-100 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Skills</h2>
        <div className="space-y-5">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-violet-500 font-semibold mb-2 uppercase tracking-widest">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-violet-50 text-violet-700 border border-violet-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Currently</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
            <span className="text-sky-500 font-bold block mb-1">Learning</span>
            <span className="text-gray-600 text-sm">TypeScript · Next.js · System Design</span>
          </div>
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
            <span className="text-pink-500 font-bold block mb-1">Building</span>
            <span className="text-gray-600 text-sm">Portfolio · E-commerce · IoT Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}