import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden font-sans text-white selection:bg-cyan-500/30">
      
      {/* BACKGROUND GRID (Cyberpunk Effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

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
            className="text-sm font-mono tracking-widest text-cyan-400 px-4 py-2 rounded border border-cyan-500/50 hover:bg-cyan-500/10 transition-all uppercase"
          >
            Login
          </button>
          <button 
            onClick={() => navigate("/login")}
            className="text-sm font-mono tracking-widest text-white px-6 py-2 rounded bg-cyan-600/30 border border-cyan-500/50 hover:bg-cyan-500/20 transition-all uppercase font-bold"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Placeholder (Optional) */}
        <div className="md:hidden text-cyan-500 font-mono text-xs ml-auto">[MENU]</div>
      </nav>

      {/* 2. HERO SECTION (Center Content) */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 text-center tracking-tighter">
          SUTRA
        </h1>
        
        <p className="text-cyan-500 font-mono text-xs md:text-sm tracking-[0.3em] mb-16 uppercase text-center animate-pulse">
          /// System Update: Ready for Deployment ///
        </p>

        {/* 3. THE "INITIATE PROTOCOL" BUTTON */}
        <button 
          onClick={() => navigate("/login")}
          className="group relative px-12 py-5 bg-cyan-950/30 border border-cyan-500/50 rounded hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          {/* Glowing dot */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
          
          <span className="pl-6 font-bold tracking-[0.2em] text-cyan-100 group-hover:text-white transition-colors">
            INITIATE PROTOCOL
          </span>
          
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500"></div>
        </button>

      </div>

      {/* Footer Details */}
      <div className="p-6 text-center border-t border-white/5 text-[10px] text-slate-600 font-mono uppercase tracking-widest">
        System Version 2.0 • Secure Uplink Active • Shikshagraha
      </div>
    </div>
  );
};

export default LandingPage;