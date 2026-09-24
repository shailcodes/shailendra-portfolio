import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 'mern',
      title: 'MERN Stack Developer',
      issuer: 'BE-Practical Tech Solutions',
      year: '2024',
      note: 'Full-stack training covering MongoDB, Express, React, and Node — built and shipped real projects through the program.',
      focus: 'Full-Stack',
    },
    {
      id: 'rwd',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      note: 'Hands-on with HTML5, CSS3, Flexbox, and Grid — the fundamentals behind every layout I build today.',
      focus: 'Frontend',
    },
    {
      id: 'js',
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2024',
      note: 'Deep dive into JavaScript fundamentals, OOP, and problem solving — sharpened the way I think through code.',
      focus: 'Core JS',
    },
    {
      id: 'rn',
      title: 'React Native Development',
      issuer: 'Coursera · Meta',
      year: '2025',
      note: 'Specialization in building cross-platform mobile apps with React Native — one codebase, both stores.',
      focus: 'Mobile',
    },
  ];

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ff2a2a]/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-zinc-800/80 pb-10 md:pb-14"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-6">
              <span className="w-6 h-px bg-zinc-700" />
              Credentials
            </div>
            <h2
              id="certifications-heading"
              className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]"
            >
              Proof of
              <br />
              <span className="italic font-serif text-[#ff2a2a]">work</span>.
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm md:text-right">
            Certifications and training programs I&apos;ve completed — each one
            backed by projects, not just a piece of paper.
          </p>
        </motion.header>

        {/* Certificate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative h-full p-8 md:p-10 bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/80">
                {/* Corner marks — certificate feel */}
                <span className="absolute top-4 left-4 w-3 h-3 border-t border-l border-zinc-700 group-hover:border-[#ff2a2a] transition-colors duration-500" />
                <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-zinc-700 group-hover:border-[#ff2a2a] transition-colors duration-500" />
                <span className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-zinc-700 group-hover:border-[#ff2a2a] transition-colors duration-500" />
                <span className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-zinc-700 group-hover:border-[#ff2a2a] transition-colors duration-500" />

                {/* Radial hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,42,42,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />

                {/* Top row — focus tag + year */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]" />
                    {cert.focus}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600 tracking-widest">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl md:text-3xl text-white tracking-tight leading-[1.15] mb-6 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <span className="text-sm text-zinc-300 tracking-wide">
                    {cert.issuer}
                  </span>
                  <span className="flex-1 h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-500" />
                </div>

                {/* Note */}
                <p className="relative z-10 text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {cert.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center gap-3 text-xs text-zinc-600 uppercase tracking-[0.2em]"
        >
          <span className="w-8 h-px bg-zinc-800" />
          Always learning something new
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;