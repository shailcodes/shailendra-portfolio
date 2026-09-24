import React from 'react';
import stackImage from '../assets/about/image-portfolio.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongo.png';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-br from-pink-500 to-orange-400 overflow-hidden font-sans min-h-screen flex items-center">

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* 1. Left Side: ID Card with Fixed Strap */}
        <div className="flex flex-col items-center w-full lg:w-[300px] shrink-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-60 left-1/2 w-3 h-52 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-8 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img src={stackImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Center Side: Text & Logos */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex-1 text-white text-center lg:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl text-black mb-4 font-bold">Hello!</h2>
          <p className="text-lg mb-8 leading-relaxed text-white/90">
            Hi, my name is <span className="text-black text-xl mx-1 tracking-wide uppercase font-bold">SHAILENDRA</span>, a passionate full-stack developer dedicated to crafting clean, functional, and highly scalable web applications.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-8 mt-8">
            <img data-aos="zoom-in" data-aos-delay="300" src={reactImage} alt="React" className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" />
            <img data-aos="zoom-in" data-aos-delay="450" src={nodeImage} alt="Node.js" className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" />
            <img data-aos="zoom-in" data-aos-delay="600" src={mongoImage} alt="MongoDB" className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" />
          </div>
        </div>

        {/* 3. Right Side: Professional Workspace SVG */}
        <div data-aos="fade-left" data-aos-delay="400"  className="w-full lg:w-[420px] flex justify-center">
          <svg
            viewBox="0 0 420 340"
            className="w-full h-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Monitor screen glow */}
              <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              {/* Monitor body */}
              <linearGradient id="monitorBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Desk surface */}
              <linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>

              {/* Coffee liquid */}
              <linearGradient id="coffee" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Plant leaf */}
              <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>

            {/* ===== DESK ===== */}
            {/* Desk top surface */}
            <rect x="30" y="270" width="360" height="14" rx="3" fill="url(#deskTop)" opacity="0.95" />
            {/* Desk front edge (depth) */}
            <rect x="30" y="284" width="360" height="6" rx="2" fill="#cbd5e1" opacity="0.7" />
            {/* Legs */}
            <rect x="60" y="290" width="10" height="40" rx="2" fill="#ffffff" opacity="0.75" />
            <rect x="350" y="290" width="10" height="40" rx="2" fill="#ffffff" opacity="0.75" />

            {/* ===== MONITOR ===== */}
            {/* Monitor stand neck */}
            <path d="M 195 240 L 195 268 L 225 268 L 225 240 Z" fill="#94a3b8" />
            {/* Monitor stand base */}
            <path d="M 165 268 Q 165 262 172 262 L 248 262 Q 255 262 255 268 Z" fill="#cbd5e1" />
            {/* Monitor outer frame */}
            <rect x="95" y="80" width="230" height="165" rx="10" fill="url(#monitorBody)" />
            {/* Monitor inner bezel (thin) */}
            <rect x="102" y="87" width="216" height="145" rx="6" fill="#0b1220" />
            {/* Screen */}
            <rect x="106" y="91" width="208" height="137" rx="4" fill="url(#screenGlow)" />

            {/* Screen content — code editor UI */}
            {/* Top tab bar */}
            <rect x="106" y="91" width="208" height="10" fill="#1e293b" />
            {/* Window dots */}
            <circle cx="114" cy="96" r="1.8" fill="#ef4444" />
            <circle cx="120" cy="96" r="1.8" fill="#eab308" />
            <circle cx="126" cy="96" r="1.8" fill="#22c55e" />
            {/* Active tab */}
            <rect x="140" y="93" width="42" height="8" rx="2" fill="#0f172a" />
            <rect x="146" y="96" width="30" height="2" rx="1" fill="#64748b" />

            {/* Sidebar (file tree) */}
            <rect x="106" y="101" width="34" height="127" fill="#0b1220" />
            <rect x="110" y="107" width="20" height="3" rx="1.5" fill="#475569" />
            <rect x="110" y="115" width="24" height="3" rx="1.5" fill="#64748b" />
            <rect x="110" y="123" width="18" height="3" rx="1.5" fill="#475569" />
            <rect x="110" y="131" width="22" height="3" rx="1.5" fill="#475569" />
            <rect x="110" y="139" width="16" height="3" rx="1.5" fill="#334155" />
            <rect x="110" y="147" width="20" height="3" rx="1.5" fill="#334155" />
            <rect x="110" y="155" width="24" height="3" rx="1.5" fill="#334155" />

            {/* Code area */}
            {/* Line numbers */}
            <rect x="146" y="106" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="114" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="122" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="130" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="138" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="146" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="154" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="162" width="4" height="2" rx="1" fill="#475569" />
            <rect x="146" y="170" width="4" height="2" rx="1" fill="#475569" />

            {/* Code lines — syntax highlighted */}
            {/* Line 1 — import */}
            <rect x="156" y="106" width="18" height="2.5" rx="1" fill="#c084fc" />
            <rect x="178" y="106" width="30" height="2.5" rx="1" fill="#e2e8f0" />

            {/* Line 2 — const */}
            <rect x="156" y="114" width="12" height="2.5" rx="1" fill="#c084fc" />
            <rect x="172" y="114" width="22" height="2.5" rx="1" fill="#38bdf8" />
            <rect x="198" y="114" width="10" height="2.5" rx="1" fill="#e2e8f0" />
            <rect x="212" y="114" width="34" height="2.5" rx="1" fill="#fbbf24" />

            {/* Line 3 — indented */}
            <rect x="164" y="122" width="16" height="2.5" rx="1" fill="#f472b6" />
            <rect x="184" y="122" width="42" height="2.5" rx="1" fill="#94a3b8" />

            {/* Line 4 */}
            <rect x="164" y="130" width="24" height="2.5" rx="1" fill="#38bdf8" />
            <rect x="192" y="130" width="30" height="2.5" rx="1" fill="#e2e8f0" />

            {/* Line 5 */}
            <rect x="164" y="138" width="18" height="2.5" rx="1" fill="#c084fc" />
            <rect x="186" y="138" width="38" height="2.5" rx="1" fill="#fbbf24" />

            {/* Line 6 — blank-ish */}
            <rect x="156" y="146" width="20" height="2.5" rx="1" fill="#475569" />
            <rect x="180" y="146" width="46" height="2.5" rx="1" fill="#94a3b8" />

            {/* Line 7 */}
            <rect x="156" y="154" width="14" height="2.5" rx="1" fill="#f472b6" />
            <rect x="174" y="154" width="52" height="2.5" rx="1" fill="#e2e8f0" />

            {/* Line 8 — return */}
            <rect x="156" y="162" width="16" height="2.5" rx="1" fill="#c084fc" />
            <rect x="176" y="162" width="26" height="2.5" rx="1" fill="#38bdf8" />
            <rect x="206" y="162" width="18" height="2.5" rx="1" fill="#e2e8f0" />

            {/* Line 9 — closing */}
            <rect x="156" y="170" width="10" height="2.5" rx="1" fill="#c084fc" />
            <rect x="170" y="170" width="34" height="2.5" rx="1" fill="#94a3b8" />

            {/* Cursor blink */}
            <rect x="188" y="178" width="1.5" height="6" fill="#22c55e">
              <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
            </rect>

            {/* Screen reflection (subtle) */}
            <rect x="106" y="91" width="208" height="137" rx="4" fill="white" opacity="0.03" />

            {/* ===== KEYBOARD ===== */}
            <rect x="140" y="278" width="150" height="14" rx="3" fill="#ffffff" opacity="0.95" />
            <rect x="140" y="278" width="150" height="3" rx="1.5" fill="#e2e8f0" opacity="0.9" />
            {/* Key rows */}
            {[0, 1, 2, 3].map((row) =>
              Array.from({ length: 14 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={145 + col * 10}
                  y={283 + row * 2.5}
                  width="7"
                  height="1.6"
                  rx="0.6"
                  fill="#cbd5e1"
                  opacity={row === 0 ? 0.4 : 0.85}
                />
              ))
            )}

            {/* ===== MOUSE ===== */}
            {/* Body */}
            <path
              d="M 315 280 Q 315 272 325 272 L 335 272 Q 345 272 345 280 L 345 286 Q 345 294 335 294 L 325 294 Q 315 294 315 286 Z"
              fill="#ffffff"
              opacity="0.95"
            />
            {/* Scroll wheel */}
            <rect x="327" y="276" width="4" height="6" rx="2" fill="#94a3b8" />
            {/* Highlight line */}
            <path
              d="M 318 283 Q 325 281 342 283"
              stroke="#e2e8f0"
              strokeWidth="0.6"
              fill="none"
              opacity="0.8"
            />

            {/* ===== COFFEE MUG ===== */}
            {/* Mug shadow */}
            <ellipse cx="72" cy="284" rx="22" ry="3" fill="#000000" opacity="0.15" />
            {/* Mug body */}
            <path
              d="M 56 245 L 56 276 Q 56 284 66 284 L 78 284 Q 88 284 88 276 L 88 245 Z"
              fill="#ffffff"
              opacity="0.95"
            />
            {/* Mug rim */}
            <ellipse cx="72" cy="245" rx="16" ry="3.5" fill="#f8fafc" />
            {/* Coffee surface */}
            <ellipse cx="72" cy="246" rx="14" ry="2.8" fill="url(#coffee)" />
            {/* Handle */}
            <path
              d="M 88 252 Q 100 252 100 262 Q 100 272 88 272"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.95"
            />
            {/* Steam */}
            <path
              d="M 66 236 Q 62 228 66 220 Q 70 212 66 204"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.5"
            >
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
            </path>
            <path
              d="M 76 236 Q 80 228 76 220 Q 72 212 76 204"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.5"
            >
              <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3.4s" repeatCount="indefinite" />
            </path>

            {/* ===== NOTEBOOK (left side) ===== */}
            <g transform="translate(30, 258)">
              {/* Notebook base */}
              <rect x="0" y="0" width="34" height="22" rx="2" fill="#fef3c7" opacity="0.95" />
              {/* Cover edge */}
              <rect x="0" y="0" width="34" height="3" rx="1" fill="#fcd34d" />
              {/* Binding dots */}
              <circle cx="4" cy="11" r="1" fill="#94a3b8" />
              <circle cx="4" cy="16" r="1" fill="#94a3b8" />
              {/* Text lines */}
              <rect x="9" y="8" width="20" height="1.2" rx="0.6" fill="#cbd5e1" />
              <rect x="9" y="12" width="16" height="1.2" rx="0.6" fill="#cbd5e1" />
              <rect x="9" y="16" width="22" height="1.2" rx="0.6" fill="#cbd5e1" />
            </g>

            {/* ===== PLANT (right side) ===== */}
            <g transform="translate(370, 240)">
              {/* Pot */}
              <path d="M -8 32 L -10 44 Q -10 47 -7 47 L 7 47 Q 10 47 10 44 L 8 32 Z" fill="#ffffff" opacity="0.95" />
              <rect x="-9" y="30" width="18" height="4" rx="1.5" fill="#f1f5f9" opacity="0.95" />
              {/* Soil */}
              <ellipse cx="0" cy="32" rx="8" ry="2" fill="#78350f" opacity="0.6" />
              {/* Stems + leaves */}
              <path d="M 0 32 Q 0 20 0 12" stroke="#16a34a" strokeWidth="1.2" fill="none" />
              <path d="M 0 24 Q -8 20 -10 14" stroke="#16a34a" strokeWidth="1.2" fill="none" />
              <path d="M 0 20 Q 8 16 10 10" stroke="#16a34a" strokeWidth="1.2" fill="none" />
              {/* Leaves */}
              <ellipse cx="-8" cy="12" rx="5" ry="3" fill="url(#leaf)" transform="rotate(-30 -8 12)" />
              <ellipse cx="8" cy="8" rx="5" ry="3" fill="url(#leaf)" transform="rotate(30 8 8)" />
              <ellipse cx="0" cy="9" rx="5.5" ry="3.2" fill="url(#leaf)" transform="rotate(-5 0 9)" />
              <ellipse cx="-3" cy="18" rx="4" ry="2.4" fill="url(#leaf)" transform="rotate(-40 -3 18)" />
              <ellipse cx="4" cy="16" rx="4" ry="2.4" fill="url(#leaf)" transform="rotate(40 4 16)" />
            </g>

            {/* ===== SUBTLE GROUND SHADOW ===== */}
            <ellipse cx="210" cy="332" rx="180" ry="4" fill="#000000" opacity="0.12" />
          </svg>
        </div>

      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-black rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;