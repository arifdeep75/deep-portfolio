"use client";

import Image from "next/image";
import { GitBranch, Globe, Download, ArrowRight } from "lucide-react";


export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-100/60 dark:bg-indigo-950/30 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-purple-100/60 dark:bg-purple-950/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-blue-100/40 dark:bg-blue-950/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              Open to Internship Opportunities
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Md. Arif Shahriar Deep
              </span>
            </h1>

            {/* Sub-heading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-5">
              Aspiring Full-Stack Developer
            </h2>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              I&apos;m a motivated developer who enjoys building modern,
              responsive web applications with clean, maintainable code. I love
              learning new technologies and solving real-world problems through
              thoughtful, user-focused software.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm hover:from-indigo-500 hover:to-purple-500 shadow-md hover:shadow-indigo-500/30 transition-all duration-200 active:scale-95"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                aria-label="Download resume PDF"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/arifdeep75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-150 text-sm"
              >
                <GitBranch className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arifdeep75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/30 blur-xl" aria-hidden="true" />
              {/* Subtle border accent */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-60" aria-hidden="true" />
              {/* Image container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Md. Arif Shahriar Deep — Aspiring Full-Stack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl px-3 py-2 shadow-lg border border-slate-100 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Stack</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">React · Next.js · TS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
