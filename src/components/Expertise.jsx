import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';

/* ---------- Journey Card ---------- */
const JourneyCard = ({ number, title, text, className, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative w-72 sm:w-80 rounded-2xl p-px transition-all duration-700 z-10 ${className} ${
        isActive ? 'scale-[1.03]' : 'hover:scale-[1.01]'
      }`}
      style={{
        background: isActive
          ? 'linear-gradient(135deg, #ff2f92, #ff5f78)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))',
        boxShadow: isActive
          ? '0 30px 70px -25px rgba(255,47,146,0.45)'
          : '0 20px 50px -30px rgba(0,0,0,0.6)',
      }}
    >
      <div className="relative rounded-2xl bg-zinc-950 p-6 md:p-7 h-full flex flex-col overflow-hidden">
        {/* Inner glow when active */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(255,47,146,0.12), transparent 60%)',
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* Top row — number + line */}
        <div className="relative z-10 flex items-center gap-3 mb-6">
          <span
            className={`text-[10px] font-mono tracking-[0.2em] transition-colors duration-500 ${
              isActive ? 'text-[#ff5f78]' : 'text-zinc-600'
            }`}
          >
            / {number}
          </span>
          <span
            className={`flex-1 h-px transition-colors duration-500 ${
              isActive ? 'bg-[#ff5f78]/40' : 'bg-zinc-800'
            }`}
          />
        </div>

        <h3
          className={`relative z-10 text-xl md:text-2xl tracking-tight mb-3 transition-colors duration-500 ${
            isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
          }`}
        >
          {title}
        </h3>

        <p
          className={`relative z-10 text-sm leading-relaxed transition-colors duration-500 ${
            isActive ? 'text-zinc-300' : 'text-zinc-500'
          }`}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

/* ---------- Expertise Section ---------- */
const Expertise = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Rocket animation coordinates
  const rocketY = useTransform(scrollYProgress, [0, 1], [180, 1220]);
  const rocketX = useTransform(scrollYProgress, [0, 1], [650, 300]);
  const rocketRotate = useTransform(scrollYProgress, [0, 1], [45, 135]);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none"
      />

      {/* Theme glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #ff2f92, #ff5f78)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #ff5f78, #ff2f92)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 border-b border-zinc-800/80 pb-10 md:pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-6">
              <span className="w-6 h-px bg-zinc-700" />
              What I Do
            </div>
            <h2
              id="expertise-heading"
              className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]"
            >
              Transforming ideas
              <br />
              into{' '}
              <span
                className="italic font-serif bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
                }}
              >
                reality
              </span>
              .
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm md:text-right">
            I specialize in building modern web applications with cutting-edge
            technologies and innovative solutions.
          </p>
        </motion.header>

        {/* Journey — ref yahan lagaya hai (inner container) */}
        <div ref={containerRef} className="relative md:h-[1350px]">
          {/* Desktop SVG */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
            viewBox="0 0 1000 1350"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="path-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff2f92" />
                <stop offset="100%" stopColor="#ff5f78" />
              </linearGradient>
              <radialGradient id="rocket-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff5f78" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff5f78" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base path */}
            <path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
            />

            {/* Mask */}
            <mask id="path-mask">
              <motion.path
                d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>

            {/* Active path */}
            <path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="2"
              strokeDasharray="6 10"
              mask="url(#path-mask)"
            />

            {/* Rocket */}
            <motion.g style={{ y: rocketY, x: rocketX, rotate: rocketRotate }}>
              <g transform="translate(-20, -20)">
                {/* Glow */}
                <circle cx="20" cy="20" r="22" fill="url(#rocket-glow)" />
                <g transform="translate(8, 8)">
                  <path
                    d="M12 2.5C12 2.5 8 6.5 8 12.5C8 16.5 10 20.5 12 22.5C14 20.5 16 16.5 16 12.5C16 6.5 12 2.5 12 2.5Z"
                    fill="#ff2f92"
                  />
                  <path d="M8 12.5L4 16.5L8 18.5Z" fill="#ff5f78" />
                  <path d="M16 12.5L20 16.5L16 18.5Z" fill="#ff5f78" />
                  <circle cx="12" cy="12" r="2" fill="white" />
                </g>
              </g>
            </motion.g>
          </svg>

          {/* Mobile line */}
          <svg
            className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="4"
              strokeDasharray="4 6"
              mask="url(#path-mask-mobile)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cards */}
          <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
            <JourneyCard
              number="01"
              title="Web Development"
              text="Creating stunning, responsive websites and web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect design implementation."
              className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-3"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <JourneyCard
              number="02"
              title="Backend Systems"
              text="Designing robust server-side architectures, RESTful APIs, and database solutions with Node.js, Express, and PostgreSQL for scalable applications."
              className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-3"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <JourneyCard
              number="03"
              title="UI/UX Design"
              text="Crafting intuitive user interfaces and exceptional user experiences with Figma, Tailwind CSS, and modern design principles that convert visitors into customers."
              className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-2"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <JourneyCard
              number="04"
              title="Cloud Solutions"
              text="Deploying and managing applications on cloud platforms using Docker, CI/CD pipelines, and DevOps best practices for reliable, high-performance systems."
              className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-2"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex absolute top-[1260px] left-[60%] items-center gap-3 text-xs text-zinc-500 uppercase tracking-[0.2em]"
            >
              <span className="w-8 h-px bg-zinc-800" />
              <span
                className="italic font-serif text-base normal-case tracking-normal bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
                }}
              >
                Let&apos;s build the future together!
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;