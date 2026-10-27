import { Code2, Layers, Wrench } from "lucide-react";

interface SkillCategory {
  label: string;
  icon: React.ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    label: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend Development",
    icon: <Layers className="w-5 h-5" />,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "Next.js"],
  },
  {
    label: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-white dark:bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            What I Work With
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm group-hover:shadow-md group-hover:shadow-indigo-500/30 transition-shadow duration-200">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm leading-tight">
                  {cat.label}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors duration-150 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
