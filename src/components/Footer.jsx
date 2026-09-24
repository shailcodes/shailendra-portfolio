import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
    { label: 'Email', href: 'mailto:your.email@gmail.com' },
  ];

  return (
    <footer className="relative w-full bg-zinc-950 text-zinc-400 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_80%)] pointer-events-none"
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#ff2a2a]/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
        {/* Top — CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 md:pb-20 border-b border-zinc-800/80"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-6">
              <span className="w-6 h-px bg-zinc-700" />
              Get in touch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.02]">
              Got an idea?
              <br />
              <span className="italic font-serif text-[#ff2a2a]">
                Let&apos;s build it.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <a
              href="mailto:your.email@gmail.com"
              className="group inline-flex items-center gap-3 text-white text-sm md:text-base uppercase tracking-[0.15em]"
            >
              <span className="relative">
                your.email@gmail.com
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-zinc-700 group-hover:bg-[#ff2a2a] transition-colors duration-300" />
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </a>
            <p className="text-xs text-zinc-600 uppercase tracking-[0.2em]">
              Usually replies within 24 hours
            </p>
          </div>
        </motion.div>

        {/* Big name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-16 md:py-24 select-none overflow-hidden"
        >
          <h2
            aria-hidden="true"
            className="text-[18vw] md:text-[8vw] leading-[0.85] font-sans tracking-tighter uppercase text-center text-white/95"
          >
            SHAILENDRA
          </h2>
          {/* Bottom fade under name */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-12 border-t border-zinc-800/80">
          {/* Nav */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-2">
              Navigate
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none p-0 m-0">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-2">
              Elsewhere
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none p-0 m-0">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-[#ff2a2a] transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className="md:col-span-4 flex flex-col gap-3 md:items-end md:text-right">
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-2">
              Info
            </span>
            <p className="text-sm text-zinc-400">Worldwide · Remote</p>
            <p className="text-sm text-zinc-500">Available for work</p>
          </div>
        </div>

        {/* Legal strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 border-t border-zinc-800/80 text-xs text-zinc-600">
          <p>
            © {year} SHAILENDRA. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em] text-[10px]">
            Designed &amp; built from scratch
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;