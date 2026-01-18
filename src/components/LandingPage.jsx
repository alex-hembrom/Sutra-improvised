import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden font-sans text-white selection:bg-cyan-500/30">
      
      {/* 1. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0 pointer-events-none"></div>

      {/* 2. HUD NAVBAR */}
      <nav className="relative z-50 w-full p-6 flex justify-between items-center border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
          <span className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            SUTRA
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-[0.2em] text-cyan-500/70">
          {["DASHBOARD", "ABOUT", "BLOG", "SYSTEMS"].map((item) => (
            <button key={item} className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all uppercase">
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 mt-10">
        
        {/* Main Title */}
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 text-center tracking-tighter drop-shadow-2xl">
          SUTRA
        </h1>

        {/* Typing Terminal */}
        <div className="h-8 mb-12 flex items-center gap-2 font-mono text-cyan-400 text-sm md:text-base tracking-widest">
          <span className="text-slate-600">running_protocols:</span>
          <TypeAnimation
            sequence={[
              "EDUCATION PROGRAMS >> ISO STANDARD", 1000,
              "EDUCATION PROGRAMS >> GAMIFIED", 1000,
              "EDUCATION PROGRAMS >> DATA DRIVEN", 1000,
              "EDUCATION PROGRAMS >> IMPACT READY", 1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]"
          />
        </div>

        {/* 4. THE ARC REACTOR BUTTON */}
        <div className="relative group cursor-pointer mb-20" onClick={() => navigate("/login")}>
          
          {/* Reactor Core (The Button) */}
          <div className="relative z-20 w-64 h-64 flex items-center justify-center">
             {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 border-l-transparent animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-b-cyan-400 border-r-transparent animate-reverse-spin"></div>
            
            {/* Central Glow */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            {/* The Actual Button */}
            <button className="relative z-30 w-40 h-40 bg-slate-900 rounded-full border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] group-hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center">
              <span className="text-4xl mb-1">⚡</span>
              <span className="text-[10px] font-bold tracking-widest text-cyan-100">INITIATE</span>
              <span className="text-[8px] tracking-widest text-cyan-500/80">PROTOCOL</span>
            </button>
          </div>

          {/* Connection Lines (Decorations) */}
          <div className="absolute top-1/2 left-0 -translate-x-full w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"></div>
          <div className="absolute top-1/2 right-0 translate-x-full w-24 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/50"></div>
        </div>

        {/* 5. THE 3 FEATURE BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
          <FeatureBox 
            title="LOGIC BUILDER" 
            desc="Auto-construct frameworks using intelligent system prompts."
            icon="🧠"
          />
          <FeatureBox 
            title="INSTANT LFA" 
            desc="Deploy standardized logical frameworks in seconds."
            icon="⚡"
            active={true} // Middle one glows more
          />
          <FeatureBox 
            title="IMPACT READY" 
            desc="Align metrics with global educational standards."
            icon="🎯"
          />
        </div>

      </div>

      {/* Footer Details */}
      <div className="py-6 text-center text-[10px] text-slate-600 font-mono uppercase tracking-widest">
        System Status: <span className="text-green-500">ONLINE</span> • V.2.0.4
      </div>
    </div>
  );
};

// HELPER COMPONENT: The Holographic Box
const FeatureBox = ({ title, desc, icon, active = false }) => (
  <div className={`relative group p-6 border ${active ? 'border-cyan-500/50 bg-cyan-950/10' : 'border-slate-800 bg-slate-900/40'} hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm overflow-hidden`}>
    
    {/* Glowing Corners */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div className="flex items-center gap-4 mb-3">
      <span className="text-2xl">{icon}</span>
      <h3 className={`font-display font-bold tracking-wider ${active ? 'text-cyan-100' : 'text-slate-300'} group-hover:text-cyan-400`}>
        {title}
      </h3>
    </div>
    
    <p className="text-xs font-mono text-slate-400 leading-relaxed">
      {desc}
    </p>

    {/* Hover Scanline Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none"></div>
  </div>
);

export default LandingPage;