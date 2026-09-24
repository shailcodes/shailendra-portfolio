import { motion } from "framer-motion";
import project1Img from "../assets/project/project-1.webp";
import project2Img from "../assets/project/project2.png";
import project3Img from "../assets/project/project-3.png";

const Projects = () => {
  const projects = [
    {
      id: "p1",
      index: "01",
      title: "Apex-Drive",
      category: "Full-Stack Commerce",
      year: "2025",
      summary:
        "A complete commerce platform built end-to-end — from the storefront customers browse to the dashboard the team runs the business on.",
      image: project1Img,
      link: "https://example.com/project1",
      highlights: [
        "Admin control panel for products, orders, and customers",
        "Smart search with layered filters",
        "Razorpay checkout integration",
        "Mobile-first build with SEO baked in",
      ],
      techStack: [
        "Next.js 15",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "shadcn/ui",
        "Razorpay",
      ],
    },
    {
      id: "p2",
      index: "02",
      title: "Neon Cyberpunk",
      category: "Full-Stack Commerce",
      year: "2025",
      summary:
        "A storefront focused on speed and feel — fast page loads, a clean checkout flow, and a backend that stays out of the way.",
      image: project2Img,
      link: "https://example.com/project2",
      highlights: [
        "Live pricing and rate updates",
        "Layout that adapts from phone to desktop",
        "Category-based product browsing",
        "Search and filtering that actually helps",
      ],
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase"],
    },
    {
      id: "p3",
      index: "03",
      title: "Nebula-Studio",
      category: "Creative Agency Site",
      year: "2024",
      summary:
        "A digital agency site built to feel premium — clean typography, subtle motion, and a layout that lets the work speak first.",
      image: project3Img,
      link: "https://example.com/project3",
      highlights: [
        "Landing page designed to convert, not just impress",
        "Motion and transitions that feel intentional",
        "Service showcase with case-study depth",
        "Built on Next.js with Framer Motion for smooth delivery",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
      ],
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_80%)] pointer-events-none"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28 border-b border-zinc-800/80 pb-10 md:pb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-6">
                <span className="w-6 h-px bg-zinc-700" />
                Selected Work
              </div>
              <h2
                id="projects-heading"
                className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]"
              >
                Things I&apos;ve
                <br />
                <span className="italic font-serif text-[#ff2a2a]">
                  built
                </span>{" "}
                so far.
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm md:text-right">
              A few projects from the past year — each one a different problem,
              a different stack, same attention to detail.
            </p>
          </div>
        </motion.header>

        {/* Projects */}
        <div className="space-y-28 md:space-y-40">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Giant index number */}
                <span
                  aria-hidden="true"
                  className={`hidden md:block absolute -top-20 lg:-top-28 select-none pointer-events-none font-serif italic leading-[0.8] text-[10rem] lg:text-[16rem] text-zinc-900/70 transition-colors duration-500 group-hover:text-zinc-800/70 ${
                    isReversed ? "right-0" : "left-0"
                  }`}
                >
                  {project.index}
                </span>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Image */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Corner meta */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                          {project.year}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Accent line */}
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#ff2a2a]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-sm font-mono text-[#ff2a2a]">
                        {project.index}
                      </span>
                      <span className="flex-1 h-px bg-zinc-800" />
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] mb-6 group-hover:text-[#ff2a2a] transition-colors duration-500">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-base leading-relaxed mb-10">
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mb-10">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-[0.22em] mb-5">
                        Focus Areas
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5 list-none p-0 m-0">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed"
                          >
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#ff2a2a] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack — inline */}
                    <div className="mb-10 pb-10 border-b border-zinc-800/80">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-[0.22em] mb-5">
                        Built With
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-400">
                        {project.techStack.map((tech, i) => (
                          <span key={tech} className="flex items-center gap-3">
                            <span className="hover:text-white transition-colors">
                              {tech}
                            </span>
                            {i !== project.techStack.length - 1 && (
                              <span className="text-zinc-700">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA — text link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center gap-3 text-white text-xs uppercase tracking-[0.2em] font-medium"
                    >
                      <span className="relative">
                        View Project
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-zinc-700 group-hover/cta:bg-[#ff2a2a] transition-colors duration-300" />
                      </span>
                      <svg
                        className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300"
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
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
