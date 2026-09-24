import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      id: 'frontend',
      number: '01',
      title: 'Frontend Engineering',
      tagline: 'Crafting fast, fluid interfaces that feel effortless.',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      accent: '#fb7185', // rose-400
    },
    {
      id: 'backend',
      number: '02',
      title: 'Backend Systems',
      tagline: 'Designing reliable APIs and data layers that scale.',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Java', 'Python', 'REST APIs', 'JWT', 'MySQL', 'MongoDB'],
      accent: '#38bdf8', // sky-400
    },
    {
      id: 'ai',
      number: '03',
      title: 'AI-Augmented Workflow',
      tagline: 'Shipping faster with the right copilots by my side.',
      skills: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'Codex', 'OpenCode', 'Midjourney'],
      accent: '#a78bfa', // violet-400
    },
    {
      id: 'devops',
      number: '04',
      title: 'DevOps & Tooling',
      tagline: 'Version control, containers, and everything in between.',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'AWS', 'Figma'],
      accent: '#34d399', // emerald-400
    },
  ];

  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section
      id="skills"
      className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400 uppercase tracking-[0.2em] mb-6">
              <span className="w-6 h-px bg-zinc-600" />
              Skills & Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              The stack behind the{' '}
              <span className="bg-gradient-to-r from-rose-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                work
              </span>
              .
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm mb-8">
              Every tool here has earned its place — picked for reliability,
              speed, and the kind of developer experience that lets me ship
              without friction.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div>
                <div className="text-white text-2xl font-medium tabular-nums">{categories.length}</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Categories</div>
              </div>
              <div className="w-px h-10 bg-zinc-800" />
              <div>
                <div className="text-white text-2xl font-medium tabular-nums">{totalSkills}+</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Tools</div>
              </div>
            </div>
          </motion.div>

          {/* Right: categories */}
          <div className="lg:col-span-8 flex flex-col">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{ '--accent': cat.accent }}
                className="group relative border-t border-zinc-800/80 last:border-b py-8 md:py-10 transition-colors duration-500"
              >
                {/* Hover glow strip */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 60%)' }}
                />

                {/* Left accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-px scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  style={{ background: 'var(--accent)' }}
                />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Number + Title */}
                  <div className="md:col-span-5 flex items-start gap-4">
                    <span className="text-xs font-mono text-zinc-600 pt-2 group-hover:text-zinc-400 transition-colors">
                      {cat.number}
                    </span>
                    <div>
                      <h3
                        className="text-2xl md:text-3xl text-white tracking-tight mb-2 transition-colors duration-300"
                        style={{ '--tw-text-opacity': 1 }}
                      >
                        <span className="group-hover:[color:var(--accent)] transition-colors duration-300">
                          {cat.title}
                        </span>
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="md:col-span-7 flex flex-wrap gap-2 md:pl-4">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm text-zinc-300 bg-white/[0.03] border border-white/[0.06] rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;