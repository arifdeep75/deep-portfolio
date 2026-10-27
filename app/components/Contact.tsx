import { Mail, GitBranch, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white dark:bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Let&apos;s Connect
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            I&apos;m open to internship opportunities, junior developer roles, and
            collaborative projects. Whether you have a question, a project idea,
            or just want to say hello — feel free to reach out. I&apos;ll do my best
            to respond promptly.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:arifdeep75@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 active:scale-95 mb-10"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              or find me on
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/arifdeep75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-150"
            >
              <GitBranch className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arifdeep75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-150"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Email display */}
          <p className="mt-8 text-sm text-slate-400 dark:text-slate-500">
            Or email directly:{" "}
            <a
              href="mailto:arifdeep75@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              arifdeep75@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
