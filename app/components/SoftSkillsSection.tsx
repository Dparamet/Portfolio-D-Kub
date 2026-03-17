import { softSkills } from "@/data/softSkills";

export default function SoftSkillsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Soft Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interpersonal and professional competencies that drive success
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-slate-700/30 backdrop-blur border border-slate-600/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, var(--color-start), var(--color-end))`,
                  "--color-start": skill.color.split(" ")[0],
                  "--color-end": skill.color.split(" ")[1],
                } as React.CSSProperties}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{skill.icon}</div>
                  <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
                    {skill.level}/10
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-600/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                    style={{ width: `${(skill.level / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Continuously developing and refining these skills through real-world projects and experiences
          </p>
        </div>
      </div>
    </section>
  );
}
