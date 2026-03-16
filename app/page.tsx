import Link from "next/link";

const skills = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vanilla JS", "IoT"];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] px-6 text-center">
      <div className="max-w-2xl">
        <p className="text-violet-400 font-medium mb-2 tracking-widest uppercase text-sm">Hello, I&apos;m</p>
        <h1 className="text-6xl font-extrabold text-gray-800 mb-3">D-Kub</h1>
        <p className="text-2xl text-violet-500 font-semibold mb-4">Web Developer &amp; Learner</p>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          I build things for the web and love solving problems with clean code.<br />
          Always learning, always growing.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center">
          <Link href="/product" className="px-6 py-3 bg-violet-500 text-white rounded-xl font-semibold hover:bg-violet-600 transition-colors shadow-md">
            View My Work
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-white text-violet-500 border-2 border-violet-200 rounded-xl font-semibold hover:border-violet-400 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}