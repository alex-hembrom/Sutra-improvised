import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-sans text-white selection:bg-cyan-500/30">
      
      {/* BACKGROUND GRID (Cyberpunk Effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* CORNER GLOWING EFFECTS */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}></div>

      {/* 1. HEADER BAR (Dashboard, About, Blog, etc.) */}
      <nav className="relative z-50 w-full p-6 flex items-center justify-between border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
        {/* Logo */}
        <div className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 cursor-pointer flex-shrink-0">
          SUTRA
        </div>
        
        {/* Navigation Links (Centered) */}
        <div className="hidden md:flex gap-12 text-sm md:text-base font-mono tracking-widest text-slate-400">
          <button onClick={() => navigate("/dashboard")} className="hover:text-cyan-400 transition-colors uppercase">
            Dashboard
          </button>
          <button className="hover:text-cyan-400 transition-colors uppercase">About</button>
          <button className="hover:text-cyan-400 transition-colors uppercase">Blog</button>
          <button className="hover:text-cyan-400 transition-colors uppercase">Systems</button>
        </div>

        {/* Login and Signup Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button 
            onClick={() => navigate("/login")}
            className="text-sm font-mono tracking-widest text-purple-400 px-4 py-2 rounded-xl border-2 border-purple-500 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.6),0_0_20px_rgba(168,85,247,0.4)] hover:bg-purple-500/10 hover:-translate-y-2 transition-all duration-300 uppercase"
          >
            Login
          </button>
          <button 
            onClick={() => navigate("/login")}
            className="text-sm font-mono tracking-widest text-white px-6 py-2 rounded-xl bg-purple-600/30 border-2 border-purple-500 hover:border-purple-400 hover:shadow-[0_15px_40px_rgba(168,85,247,0.8),0_0_25px_rgba(168,85,247,0.6)] hover:bg-purple-500/40 hover:-translate-y-2 transition-all duration-300 uppercase font-bold"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Placeholder (Optional) */}
        <div className="md:hidden text-cyan-500 font-mono text-xs ml-auto">[MENU]</div>
      </nav>

      {/* 2. HERO SECTION (Center Content) */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        
        {/* Main Title with Gradient */}
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-6 text-center tracking-tighter cursor-pointer transition-all duration-300 hover:-translate-y-3 group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:drop-shadow-[0_0_50px_rgba(6,182,212,0.8)]">SU</span><span className="text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.6),0_0_60px_rgba(6,182,212,0.7),0_0_80px_rgba(6,182,212,0.5)]" style={{textShadow: '0 0 5px rgba(255,255,255,0.4)'}}>T</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">RA</span>
        </h1>
        
        <p className="text-cyan-500 font-mono text-xs md:text-sm tracking-[0.3em] mb-16 uppercase text-center animate-pulse">
          /// System Update: Ready for Deployment ///
        </p>

        {/* 3. THE "INITIATE PROTOCOL" BUTTON WITH ARC REACTOR */}
        <div className="relative group mb-12 flex items-center justify-center gap-8">
          {/* Button */}
          <button 
            onClick={() => navigate("/login")}
            className="group/btn relative px-12 py-5 bg-gradient-to-br from-cyan-950/50 to-slate-950/50 border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] font-bold tracking-[0.2em] text-cyan-100 group-hover/btn:text-white uppercase not-italic overflow-hidden"
            style={{transform: 'skewX(-20deg)'}}
          >
            {/* Loading Bar Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-loading" style={{animation: 'loading 2.5s ease-in-out infinite'}}></div>
            
            {/* Text */}
            <span className="relative">INITIATE PROTOCOL</span>
          </button>

          {/* Arc Reactor - Improved Design (Right side) */}
          <div className="relative w-40 h-40 flex items-center justify-center pointer-events-none">
            {/* Outer perfect circle */}
            <div className="absolute w-28 h-28 border-2 border-cyan-500/60 rounded-full group-hover/btn:border-cyan-400/80 transition-all duration-300"></div>
            
            {/* Dotted inner circle - spins on hover */}
            <div className="absolute w-24 h-24 border-4 border-dashed border-cyan-500/50 rounded-full group-hover/btn:border-cyan-400/70 transition-all duration-300" style={{animation: 'var(--dotted-anim, none)'}}></div>
            
            {/* Hollow Triangle - perfectly inscribed in dashed circle */}
            <svg className="absolute transition-all duration-300" width="96" height="96" viewBox="0 0 96 96" style={{filter: 'var(--tri-glow, none)', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} >
              <polygon points="48,0 90,75 6,75" fill="none" stroke="rgba(34,211,238,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            {/* Small hollow circle - touching inner wall of triangle */}
            <div className="absolute w-4 h-4 rounded-full border-2 border-cyan-400 transition-all duration-300" style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -35%)',
              animation: 'var(--pulse-anim, none)'
            }} onMouseEnter={(e) => {
              e.currentTarget.parentElement.style.setProperty('--tri-glow', 'drop-shadow(0 0 10px rgba(34,211,238,0.8))');
              e.currentTarget.parentElement.style.setProperty('--dotted-anim', 'spin 20s linear infinite');
              e.currentTarget.style.setProperty('--pulse-anim', 'pulse 2s ease-in-out infinite');
            }} onMouseLeave={(e) => {
              e.currentTarget.parentElement.style.setProperty('--tri-glow', 'none');
              e.currentTarget.parentElement.style.setProperty('--dotted-anim', 'none');
              e.currentTarget.style.setProperty('--pulse-anim', 'none');
            }}></div>
          </div>
        </div>

        {/* 4. FEATURE BOXES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-12">
          {/* Box 1 */}
          <div className="group/box relative p-6 border border-cyan-500/30 rounded-lg bg-gradient-to-br from-cyan-950/20 to-slate-950/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.5),0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 group-hover/box:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all"></div>
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold tracking-widest mb-3 text-cyan-300">Logic Builder</h3>
            <p className="text-sm text-slate-400 font-mono">Drop-and-drag system design without the complex jargon.</p>
          </div>

          {/* Box 2 */}
          <div className="group/box relative p-6 border border-cyan-500/30 rounded-lg bg-gradient-to-br from-cyan-950/20 to-slate-950/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.5),0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 group-hover/box:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all"></div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-bold tracking-widest mb-3 text-cyan-300">Instant LFA</h3>
            <p className="text-sm text-slate-400 font-mono">Generate ISO-standard Logical Frameworks in seconds.</p>
          </div>

          {/* Box 3 */}
          <div className="group/box relative p-6 border border-cyan-500/30 rounded-lg bg-gradient-to-br from-cyan-950/20 to-slate-950/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.5),0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 group-hover/box:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all"></div>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold tracking-widest mb-3 text-cyan-300">Impact Ready</h3>
            <p className="text-sm text-slate-400 font-mono">Aligned with Shikshagraha's 1 Million School mission.</p>
          </div>
        </div>

      </div>

      {/* Footer Details */}
      <div className="p-6 text-center border-t border-white/5 text-[10px] text-slate-600 font-mono uppercase tracking-widest">
        System Version 2.0 • Secure Uplink Active • Shikshagraha
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0% { 
            transform: scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.3);
            opacity: 0.3;
          }
          100% { 
            transform: scale(1);
            opacity: 0.8;
          }
        }
        @keyframes charging {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes loading {
          0% {
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
            opacity: 0.3;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;