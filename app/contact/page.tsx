// app/contact/page.tsx

const links = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    color: "border-violet-100 hover:border-violet-300",
    labelColor: "text-violet-500",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    color: "border-gray-200 hover:border-gray-400",
    labelColor: "text-gray-700",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    color: "border-sky-100 hover:border-sky-300",
    labelColor: "text-sky-500",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact</h1>
      <div className="w-16 h-1 bg-violet-400 rounded mb-4"></div>
      <p className="text-gray-500 mb-10">
        Want to work together or just say hi? Feel free to reach out!
      </p>

      {/* Social / contact links */}
      <div className="space-y-4 mb-12">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all ${link.color}`}
          >
            <span className={`font-semibold ${link.labelColor}`}>{link.label}</span>
            <span className="text-sm text-gray-500">{link.value}</span>
          </a>
        ))}
      </div>

      {/* Message form */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-violet-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Send a Message</h2>
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
              placeholder="What&apos;s on your mind?"
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-violet-400 text-gray-700 bg-gray-50 resize-none"
            ></textarea>
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
  );
}
