import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';   // ← ye add karo
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero-video/hero-videoo.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out',
    });
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-zinc-950"
    >
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.02]"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ===== OVERLAYS ===== */}
      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-zinc-9000/80 via-zinc-9000/60 to-zinc-950/95 z-10 pointer-events-none"
      />
      {/* Left vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10 pointer-events-none"
      />
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)] z-10 pointer-events-none"
      />
      {/* Theme glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #ff2f92, #ff5f78)' }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 md:pt-36 pb-10 md:pb-14">

        {/* Top spacing kept for navbar */}

        {/* ===== MIDDLE — MAIN CONTENT ===== */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">

          {/* Eyebrow */}
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="flex items-center gap-3 text-[11px] text-zinc-400 uppercase tracking-[0.25em] mb-8"
          >
            <span
              className="w-8 h-px"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
              }}
            />
            Full-Stack Developer
          </div>

       


          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-6xl text-white tracking-tight leading-[0.98] mb-8 font-black">
  {/* Line 1 */}
  <span className="block">
    {['Building', 'the', 'web,'].map((word, i) => (
      <motion.strong
        key={word}
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.6,
          delay: 2.5 + i * 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block mr-[0.25em]  "
      >
        {word}
      </motion.strong>
    ))}
  </span>

  {/* Line 2 */}
  <span className="block">
    {['one', 'line'].map((word, i) => (
      <motion.span
        key={word}
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.6,
          delay: 4.25 + i * 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block mr-[0.25em] italic font-serif bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
        }}
      >
        {word}
      </motion.span>
    ))}

    {['at', 'a', 'time.'].map((word, i) => (
      <motion.strong
        key={word}
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.6,
          delay: 5.2 + i * 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.strong>
    ))}
  </span>
</h1>


          {/* Heading — word-by-word reveal */}


         


{/* Subtext */}
<motion.p
  className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl mb-12"
>
  {[
    'I', 'design', 'and', 'ship', 'fast,',
    'scalable', 'web', 'applications', 'with', 'React,',
    'Next.js,', 'Node.js,', 'and', 'Tailwind', '—',
    'often', 'with', 'AI', 'in', 'the', 'loop.',
  ].map((word, i) => (
    <motion.span
      key={`${word}-${i}`}
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 1.1,
        delay: 5.5 + i * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </motion.span>
  ))}
</motion.p>
          {/* CTAs */}
         
<div className="flex flex-wrap items-center gap-4 md:gap-6">
  {/* Primary — gradient button */}
  <motion.a
    href="#projects"
    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{
      duration: 1,
      delay: 7.35,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-xs md:text-sm uppercase tracking-[0.15em] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
      style={{
        backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
      }}
    />
    <span className="relative z-10">View My Work</span>
    <svg
      className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
  </motion.a>

  {/* Secondary — text link with underline */}
  <motion.a
    href="#contact"
    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{
      duration: 1,
      delay: 7.95,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group inline-flex items-center gap-3 text-white text-xs md:text-sm uppercase tracking-[0.15em]"
  >
    <span className="relative">
      Let&apos;s Talk
      <span
        className="absolute -bottom-1 left-0 right-0 h-px scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-500"
        style={{
          backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
        }}
      />
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
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </motion.a>
</div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-white/10"
        >
          {/* Left — info chips */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.22em]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.22em]">
              <span className="w-4 h-px bg-zinc-700" />
              India · Remote
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.22em]">
              <span className="w-4 h-px bg-zinc-700" />
              2025 Portfolio
            </div>
          </div>

          {/* Right — mute toggle */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="group flex items-center gap-3 text-[10px] text-zinc-400 uppercase tracking-[0.22em] hover:text-white transition-colors duration-300 cursor-pointer w-fit"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm group-hover:border-white/40 transition-colors duration-300">
              {isMuted ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </span>
            <span className="hidden sm:inline">
              {isMuted ? 'Unmute Reel' : 'Mute Sound'}
            </span>
          </button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div
        data-aos="fade-in"
        data-aos-delay="900"
        className="hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;




