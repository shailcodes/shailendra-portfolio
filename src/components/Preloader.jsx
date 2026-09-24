import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-zinc-950 z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"
          />

          {/* Theme gradient glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #ff2f92, #ff5f78)' }}
          />

          {/* Center content */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-10"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500"
            >
              <span className="w-6 h-px bg-zinc-700" />
              Portfolio
              <span className="w-6 h-px bg-zinc-700" />
            </motion.div>

            {/* Name — layered fill effect */}
            <div className="relative text-5xl md:text-7xl tracking-tighter leading-none">
              {/* Ghost text (base) */}
              <div className="text-zinc-800 select-none">
                SHAILENDRA<span className="text-zinc-800">.</span>
              </div>

              {/* Filled text with gradient clip on top */}
              <motion.div
                aria-hidden="true"
                className="absolute top-0 left-0 overflow-hidden whitespace-nowrap bg-clip-text text-transparent"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
                }}
              >
                SHAILENDRA<span className="text-white">.</span>
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="relative w-48 md:w-64 h-px bg-zinc-800 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
                }}
              />
            </div>

            {/* Loading text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-600"
            >
              Loading
            </motion.span>
          </motion.div>

          {/* Bottom-right corner meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600"
          >
            © 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;