import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Ensure these assets are in src/assets/
import spaceBg from "../assets/space-bg.jpg";
import cloudFloor from "../assets/cloud-floor.png";
import heroRobot from "../assets/hero-robot.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bootLines, setBootLines] = useState([]);

  useEffect(() => {
    const lines = [
      "> INITIALIZING KERNEL...",
      "> CHECKING MEMORY INTEGRITY... [OK]",
      "> LOADING ASSETS... [OK]",
      "> CONNECTING TO MAINFRAME...",
      "> ESTABLISHING SECURE LINK...",
      "> SYSTEM READY."
    ];
    
    let delay = 0;
    lines.forEach((line, index) => {
      setTimeout(() => {
        setBootLines(prev => [...prev, line]);
      }, delay);
      delay += 400 + Math.random() * 300;
    });

    setTimeout(() => setLoading(false), delay + 800);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-black text-green-500 font-mono p-10 flex flex-col justify-end text-xl md:text-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
        <div className="z-10">
          {bootLines.map((line, i) => (
            <div key={i} className="mb-2 opacity-80 animate-pulse-fast">{line}</div>
          ))}
          <div className="animate-blink mt-2">_</div>
        </div>
      </div>
    );
  }

  return (
    /* Apply 'no-scrollbar' to hide the vertical bar */
    <div className="h-screen w-full overflow-x-hidden overflow-y-auto bg-[#050510] no-scrollbar font-sans text-white selection:bg-cyan-500/30 scroll-smooth">
      
      {/* 1. ZOOMED OUT BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Space Background (Zoomed Out with scale-100) */}
        <div className="absolute inset-0 scale-100 animate-bg-darken">
          <img src={spaceBg} className="w-full h-full object-cover opacity-50 mix-blend-screen grayscale contrast-125" alt="space" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]"></div>
        </div>

        {/* Cloud Layer (Visible and Melted) */}
        <div className="absolute bottom-0 w-full h-1/2 opacity-60 mix-blend-lighten animate-cloud-up">
          <img 
            src={cloudFloor} 
            className="w-full h-full object-contain" 
            style={{ 
              maskImage: 'radial-gradient(ellipse at bottom, black 40%, transparent 90%)', 
              WebkitMaskImage: 'radial-gradient(ellipse at bottom, black 40%, transparent 90%)' 
            }}
            alt="clouds" 
          />
        </div>
      </div>

      {/* 2. HEADER BAR (Transparent with visible buttons) */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-4 flex justify-between items-center bg-[#050510]/40 backdrop-blur-md border-b border-white/5">
         <div className="flex items-center gap-4">
            <div className="font-display font-bold text-2xl text-cyan-400 tracking-tighter">SUTRA</div>
            <div className="hidden lg:flex gap-6 ml-8 font-mono text-xs tracking-widest text-gray-300 uppercase">
               <button onClick={() => navigate("/")} className="hover:text-cyan-400 transition-colors">Dashboard</button>
               <button onClick={() => scrollToSection('problem-statement')} className="hover:text-red-400 transition-colors">Problem Statement</button>
               <button onClick={() => scrollToSection('solution')} className="hover:text-cyan-400 transition-colors">Solution</button>
               <button onClick={() => scrollToSection('systems-grid')} className="hover:text-purple-400 transition-colors">Systems</button>
            </div>
         </div>
         <div className="text-xs md:text-sm text-green-400 animate-pulse font-mono tracking-widest hidden md:block uppercase">SYS.STATUS: ONLINE</div>
      </nav>

      {/* 3. CONTENT AREA (Pushed down to avoid header overlap) */}
      <div className="relative z-10 pt-48 pb-20">
        
        {/* HERO SECTION (Smaller scale elements) */}
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-center gap-10 mb-40">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="relative mb-6 group inline-block">
              {/* Reduced title size for a better fit */}
              <h1 className="text-7xl md:text-8xl xl:text-9xl font-thin tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-white relative z-10 leading-none" 
                  style={{fontFamily: 'Samarkan, sans-serif', textShadow: '0 0 40px rgba(6,182,212,0.4)'}}>
                SUTRA
              </h1>
            </div>
            
            <p className="text-cyan-400 font-mono text-sm md:text-lg xl:text-xl tracking-[0.4em] mb-12 uppercase py-4 border-y border-cyan-500/10 max-w-2xl mx-auto lg:mx-0">
              /// ARCHITECTING EDUCATIONAL INTELLIGENCE ///
            </p>

            {/* Smaller Initiate Button */}
            <button 
              onClick={() => navigate("/login")}
              className="relative w-64 md:w-72 h-16 bg-transparent border border-cyan-500/40 text-white font-display font-bold text-lg tracking-[0.2em] hover:bg-cyan-500/10 transition-all group"
              style={{clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'}}
            >
              <span className="z-10 relative text-base">INITIATE MISSION</span>
              <div className="absolute inset-0 bg-cyan-400/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center relative scale-100 lg:scale-110">
            {/* Reduced Robot size and melted effect */}
            <img 
              src={heroRobot} 
              className="w-full max-w-md mix-blend-lighten animate-float relative z-10 pointer-events-none" 
              style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 95%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 95%)' }}
              alt="robot assistant" 
            />
          </div>
        </div>

        {/* 4. MODULES SECTION (Smaller grid elements) */}
        <div className="max-w-[1200px] mx-auto px-10">
          <div id="systems-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {["LOGIC CORE", "AUTO-LFA", "IMPACT SYNC"].map((title, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/40 transition-all hover:-translate-y-2 group">
                <div className="text-4xl mb-6 text-white/10 group-hover:text-cyan-400 transition-colors tracking-tighter font-display">0{i+1}</div>
                <h3 className="text-xl font-bold font-display text-white mb-4 tracking-widest">{title}</h3>
                <p className="text-sm font-mono text-slate-500 group-hover:text-slate-300">System protocol for architecture.</p>
              </div>
            ))}
          </div>

          {/* PROBLEM SECTION (Integrated and smaller) */}
          <div id="problem-statement" className="mb-32 border-l border-red-500/30 p-12 bg-black/10 backdrop-blur-sm relative overflow-hidden">
             <div className="absolute right-0 top-0 text-[10rem] font-black text-red-500/5 z-0 select-none font-display uppercase">ERROR</div>
             <h2 className="text-3xl font-display font-bold text-red-500/60 mb-6 relative z-10 tracking-[0.3em]">⚠️ PROBLEM_CORE</h2>
             <p className="text-slate-400 font-mono leading-relaxed text-lg md:text-xl relative z-10 max-w-4xl">
               Education leaders face high cognitive load. SUTRA removes this barrier by gamifying the transition from idea to action.
             </p>
          </div>

          {/* SOLUTION SECTION (Integrated and smaller) */}
          <div id="solution" className="mb-40 border-r border-cyan-500/30 p-12 bg-black/10 backdrop-blur-sm relative overflow-hidden text-right">
             <div className="absolute left-0 top-0 text-[10rem] font-black text-cyan-500/5 z-0 select-none font-display uppercase">RESOLVED</div>
             <h2 className="text-3xl font-display font-bold text-cyan-500/60 mb-6 relative z-10 tracking-[0.3em]">SYSTEM_SOLUTION ⚡</h2>
             <p className="text-slate-400 font-mono leading-relaxed text-lg md:text-xl relative z-10 max-w-4xl ml-auto">
                Our digital architecture allows organizations to build high-quality impact strategies instantly.
             </p>
          </div>
        </div>
      </div>

      <style>{`
        /* FORCED HIDING OF THE SCROLLBAR */
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        
        @keyframes cloudUp {
          from { transform: translateY(0); opacity: 0.6; }
          to { transform: translateY(-30vh); opacity: 0; }
        }
        @keyframes bgDarken {
          from { filter: brightness(1); }
          to { filter: brightness(0.2); }
        }
        .animate-cloud-up {
          animation: cloudUp linear both;
          animation-timeline: scroll();
          animation-range: 0 100vh;
        }
        .animate-bg-darken {
          animation: bgDarken linear both;
          animation-timeline: scroll();
          animation-range: 0 150vh;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        .animate-float { animation: float 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;