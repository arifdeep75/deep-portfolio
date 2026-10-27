import { GitBranch, ExternalLink, ShoppingBasket, Dumbbell } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
  previewGradient: string;
  previewAccent: string;
}

const projects: Project[] = [
  {
    title: "Bazar Dor",
    description:
      "A Bengali-focused grocery price information web application designed to help users explore everyday products and their prices through a localized, user-friendly interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/arifdeep75/bazar-dor",
    liveUrl: "https://bazar-dor-two-ashen.vercel.app/",
    icon: <ShoppingBasket className="w-10 h-10" />,
    previewGradient: "from-emerald-500 to-teal-600",
    previewAccent: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  {
    title: "Fit Log",
    description:
      "A fitness-focused web application for exploring workouts and organizing personal workout plans through a clean, responsive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/arifdeep75/fit-log",
    liveUrl: "https://fit-log-beta-nine.vercel.app/",
    icon: <Dumbbell className="w-10 h-10" />,
    previewGradient: "from-orange-500 to-rose-600",
    previewAccent: "bg-orange-100 dark:bg-orange-900/40",
  },
];

function ProjectPreview({
  gradient,
  accent,
  icon,
  title,
}: {
  gradient: string;
  accent: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`relative h-48 ${accent} overflow-hidden`}
      aria-hidden="true"
    >
      {/* Decorative circles */}
      <div
        className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-20`}
      />
      <div
        className={`absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br ${gradient} opacity-15`}
      />
      {/* Browser-like chrome */}
      <div className="absolute top-4 left-4 right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200/60 dark:border-slate-700/60 bg-slate-50/80 dark:bg-slate-900/60">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 h-4 bg-slate-200/80 dark:bg-slate-700/60 rounded text-[9px] text-slate-500 dark:text-slate-400 flex items-center px-2 overflow-hidden">
            {title.toLowerCase().replace(" ", "-")}.vercel.app
          </div>
        </div>
        {/* Content preview */}
        <div className="p-3">
          <div className="h-2 w-3/4 bg-slate-300/60 dark:bg-slate-600/60 rounded mb-2" />
          <div className="h-2 w-1/2 bg-slate-200/60 dark:bg-slate-700/60 rounded mb-3" />
          <div className="flex gap-2">
            <div className={`h-5 w-16 rounded bg-gradient-to-r ${gradient} opacity-80`} />
            <div className="h-5 w-12 rounded bg-slate-200/60 dark:bg-slate-700/60" />
          </div>
        </div>
      </div>
      {/* Icon */}
      <div
        className={`absolute bottom-4 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg opacity-90`}
      >
        {icon}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Things I&apos;ve Built
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            A selection of personal projects I&apos;ve built to explore real-world
            problems and sharpen my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-all duration-300"
            >
              {/* Visual preview */}
              <ProjectPreview
                gradient={project.previewGradient}
                accent={project.previewAccent}
                icon={project.icon}
                title={project.title}
              />

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-150"
                  >
                    <GitBranch className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:from-indigo-500 hover:to-purple-500 shadow-sm hover:shadow-indigo-500/25 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
