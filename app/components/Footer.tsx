import { GitBranch, Globe } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-800 dark:text-slate-100 mb-0.5">
              Md. Arif Shahriar Deep
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aspiring Full-Stack Developer — building one project at a time
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/arifdeep75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arifdeep75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors duration-150"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500">
          <p>© {year} Md. Arif Shahriar Deep. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Next.js
            </span>{" "}
            &amp;{" "}
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
