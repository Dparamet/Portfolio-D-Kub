// ===== DATA =====

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vanilla JS"],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "REST APIs", "Git", "GitHub"],
  },
  {
    category: "Other Interests",
    items: ["IoT", "Arduino", "Figma"],
  },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce platform with product listings, cart, and checkout flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-600",
    gradient: "from-violet-200 to-pink-100",
  },
  {
    id: 2,
    title: "IoT Dashboard",
    description:
      "A real-time dashboard for monitoring IoT sensor data with live charts and alerts.",
    tech: ["React", "Node.js", "IoT", "MQTT"],
    status: "Coming Soon",
    statusColor: "bg-sky-100 text-sky-600",
    gradient: "from-sky-200 to-teal-100",
  },
];

const labProjects = [
  {
    id: 1,
    title: "Calculator",
    description: "A clean calculator built with pure Vanilla JS — no frameworks, just raw logic.",
    tech: "Vanilla JS",
    status: "Coming Soon",
    cardColor: "border-teal-100 hover:border-teal-300",
    tagColor: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    id: 2,
    title: "Todo List",
    description: "A simple todo app with local storage persistence, add/remove/complete tasks.",
    tech: "Vanilla JS",
    status: "Coming Soon",
    cardColor: "border-pink-100 hover:border-pink-300",
    tagColor: "bg-pink-50 text-pink-600 border-pink-100",
  },
];

// ===== PAGE =====

export default function HomePage() {
  return (
    <div>
      {/* ──────────────── HERO ──────────────── */}
      <section
        id="hero"
        className="scroll-mt-16 min-h-[92vh] flex items-center bg-gradient-to-br from-violet-50 via-white to-sky-50 px-6 md:px-20 py-20"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="text-6xl font-extrabold text-gray-800 leading-tight mb-3">D-Kub</h1>
            <h2 className="text-2xl text-violet-500 font-semibold mb-5">
              Web Developer &amp; Learner
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              I build things for the web and love solving problems with clean code.
              Always learning, always growing. Currently exploring TypeScript &amp; Next.js.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-violet-500 text-white rounded-xl font-semibold hover:bg-violet-600 transition-colors shadow-md"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-violet-500 border-2 border-violet-200 rounded-xl font-semibold hover:border-violet-400 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-sky-50 text-sky-600 rounded-lg text-sm font-medium hover:bg-sky-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your@email.com"
                className="px-4 py-2 bg-violet-50 text-violet-600 rounded-lg text-sm font-medium hover:bg-violet-100 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 rounded-full bg-gradient-to-br from-violet-300 to-sky-200 flex items-center justify-center shadow-2xl">
                <span className="text-7xl font-extrabold text-white select-none">DK</span>
              </div>
              <div
                className="absolute -inset-4 rounded-full border-2 border-violet-200 border-dashed animate-spin"
                style={{ animationDuration: "18s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── ABOUT ──────────────── */}
      <section id="about" className="scroll-mt-16 py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-16 h-1 bg-violet-400 rounded mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio + info */}
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Hey! I&apos;m a self-driven developer who loves building things for the web.
                I&apos;m currently focusing on mastering TypeScript and Next.js while
                exploring IoT. I believe in learning by doing — every project is a chance
                to grow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Role",     value: "Web Developer" },
                  { label: "Location", value: "Thailand" },
                  { label: "Email",    value: "your@email.com" },
                  { label: "Status",   value: "Open to Work ✓" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="bg-violet-50 p-4 rounded-xl border border-violet-100"
                  >
                    <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-700 font-medium text-sm">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs text-violet-500 font-semibold mb-3 uppercase tracking-widest">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white text-violet-700 border border-violet-200 rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── PROJECTS ──────────────── */}
      <section id="projects" className="scroll-mt-16 py-20 px-6 md:px-20 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
          <div className="w-16 h-1 bg-violet-400 rounded mb-4" />
          <p className="text-gray-500 mb-10">Things I&apos;ve built or am currently working on.</p>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-violet-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/60 font-bold text-xl">{project.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2 ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── THE LAB ──────────────── */}
      <section id="lab" className="scroll-mt-16 py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">The Lab</h2>
          <div className="w-16 h-1 bg-violet-400 rounded mb-4" />
          <p className="text-gray-500 mb-10">
            My playground for experimenting with logic using Vanilla JS — no frameworks, just raw code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${project.cardColor}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className={`px-2 py-1 border rounded text-xs font-medium ${project.tagColor}`}>
                  {project.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CONTACT ──────────────── */}
      <section id="contact" className="scroll-mt-16 py-20 px-6 md:px-20 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact</h2>
          <div className="w-16 h-1 bg-violet-400 rounded mb-4" />
          <p className="text-gray-500 mb-10">Want to work together or just say hi? Feel free to reach out!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Links */}
            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center justify-between p-5 bg-white rounded-2xl border border-violet-100 shadow-sm hover:border-violet-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-violet-500">Email</span>
                <span className="text-sm text-gray-400">your@email.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-400 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-gray-700">GitHub</span>
                <span className="text-sm text-gray-400">github.com/yourusername</span>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-sky-500">LinkedIn</span>
                <span className="text-sm text-gray-400">linkedin.com/in/yourprofile</span>
              </a>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-violet-100">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-violet-500 text-white rounded-xl font-semibold hover:bg-violet-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-white border-t border-violet-100">
        © 2026 D-Kub · Built with Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
