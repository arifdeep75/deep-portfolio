export default function About() {
  const highlights = [
    {
      icon: "💻",
      title: "Frontend Focus",
      desc: "Passionate about crafting clean, intuitive user interfaces with React and Next.js.",
    },
    {
      icon: "🔧",
      title: "Practical Builder",
      desc: "I learn by building — turning ideas into working, deployed web applications.",
    },
    {
      icon: "📚",
      title: "Continuous Learner",
      desc: "Constantly exploring new technologies, best practices, and programming concepts.",
    },
    {
      icon: "🤝",
      title: "Collaborative",
      desc: "Open to teamwork, feedback, and growing alongside other developers.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Who I Am
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              I&apos;m <strong className="text-slate-800 dark:text-slate-200">Md. Arif Shahriar Deep</strong>, an aspiring
              developer with a genuine interest in frontend and full-stack web
              development. I enjoy the process of turning a blank page into a
              functioning application that solves real problems.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              My focus is on building practical projects using modern tools like{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                React, Next.js, and TypeScript
              </span>
              . I care about writing clean, maintainable code that is readable
              by other developers and scalable over time.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m actively looking for internship opportunities and junior
              developer roles where I can contribute, grow, and continue building
              my skills alongside experienced developers. I am a motivated,
              curious learner and a collaborative team player.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-all duration-200"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
