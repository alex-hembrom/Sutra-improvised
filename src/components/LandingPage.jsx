import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bootLines, setBootLines] = useState([]);

  // 1. BOOT SEQUENCE LOGIC
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
      delay += 500 + Math.random() * 500;
    });

    setTimeout(() => {
      setLoading(false);
    }, delay + 800);
  }, []);

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
    // Added 'overflow-hidden' strictly here to contain the large glow blobs
    <div className="min-h-screen bg-[#050510] flex flex-col relative overflow-hidden font-sans text-white selection:bg-cyan-500/30 animate-crt-turn-on pt-24">
      
      {/* HUD OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-40 p-6 hidden md:block">
        <div className="absolute top-24 left-6 border-l-2 border-t-2 border-cyan-500/50 w-32 h-32 rounded-tl-3xl opacity-60"></div>
        <div className="absolute top-28 left-10 font-mono text-xs text-cyan-400">
          <div>SYS.STATUS: <span className="text-green-400 animate-pulse">ONLINE</span></div>
          <div>LOC: 22.88.11</div>
        </div>
        <div className="absolute bottom-6 left-6 border-l-2 border-b-2 border-cyan-500/50 w-32 h-32 rounded-bl-3xl opacity-60"></div>
        <div className="absolute bottom-8 left-10 font-mono text-xs text-cyan-400 opacity-50">/// SUTRA.OS.VER.2.0 ///</div>
        <div className="absolute bottom-6 right-6 border-r-2 border-b-2 border-purple-500/50 w-32 h-32 rounded-br-3xl opacity-60"></div>
      </div>

      {/* === NEW: CORNER GLOW EFFECTS === */}
      {/* Top Left - Purple Glow */}
      {/* We create a large square, blur it heavily, and shift its center to the top-left corner */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-purple-600/25 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse-slow"></div>
      </div>

      {/* Bottom Right - Blue Glow */}
      {/* Shifting center to bottom-right corner */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-600/25 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 mix-blend-screen animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      {/* ================================ */}


      {/* BACKGROUND GRID (z-index 0 to sit on top of glows but below content) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-scroll opacity-70"></div>

      {/* HERO SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 mt-10">
        <div className="relative mb-6 group">
          <h1 className="text-7xl md:text-9xl font-display font-black text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 relative z-10" 
              style={{textShadow: '0 0 20px rgba(6,182,212,0.5)'}}>
            SUTRA
          </h1>
          <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-display font-black text-center tracking-tighter text-cyan-500 opacity-0 group-hover:opacity-70 animate-glitch-1" aria-hidden="true">SUTRA</h1>
          <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-display font-black text-center tracking-tighter text-purple-500 opacity-0 group-hover:opacity-70 animate-glitch-2" aria-hidden="true">SUTRA</h1>
        </div>
        
        <p className="text-cyan-500 font-mono text-xs md:text-sm tracking-[0.5em] mb-16 uppercase text-center border-y border-cyan-500/30 py-2 w-full max-w-lg bg-cyan-950/20 backdrop-blur-md">
          /// ARCHITECTING EDUCATIONAL INTELLIGENCE ///
        </p>

        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button 
            onClick={() => navigate("/login")}
            className="relative w-64 h-16 bg-black border border-cyan-500/50 flex items-center justify-center gap-4 overflow-hidden hover:border-cyan-400 transition-all group-hover:w-72"
            style={{clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'}}
          >
            <div className="absolute inset-0 bg-cyan-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="font-display font-bold text-xl tracking-widest text-white z-10">INITIATE</span>
            <div className="w-3 h-3 bg-cyan-400 rotate-45 animate-pulse z-10"></div>
          </button>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mb-20">
          {[
            { title: "LOGIC CORE", icon: "❖", desc: "Advanced node-based logic construction." },
            { title: "AUTO-LFA", icon: "⚡", desc: "Instantaneous ISO-standard generation." },
            { title: "IMPACT SYNC", icon: "◈", desc: "Real-time mission alignment protocols." }
          ].map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-slate-900/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-5xl mb-4 text-slate-700 group-hover:text-cyan-400 transition-colors font-display">{feature.icon}</div>
              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-300">{feature.title}</h3>
              <p className="text-sm font-mono text-slate-400 group-hover:text-slate-300">{feature.desc}</p>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:animate-scan"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Added a slow pulse for the corner glows so they feel alive */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.4; transform: scale(1.1) translate(-50%, -50%); }
        }
        /* Need a separate one for bottom right to handle positive translate */
        @keyframes pulse-slow-br {
           0%, 100% { opacity: 0.25; transform: scale(1) translate(50%, 50%); }
           50% { opacity: 0.4; transform: scale(1.1) translate(50%, 50%); }
        }

        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        /* Overriding animation for bottom right */
        .bottom-0 .animate-pulse-slow { animation-name: pulse-slow-br; }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
          100% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 1px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes crt-turn-on {
          0% { transform: scaleY(0) scaleX(0); opacity: 0; filter: brightness(0); }
          50% { transform: scaleY(0.02) scaleX(1); opacity: 1; filter: brightness(5); }
          100% { transform: scaleY(1) scaleX(1); opacity: 1; filter: brightness(1); }
        }
        .animate-scan { animation: scan 1.5s linear infinite; }
        .animate-glitch-1 { animation: glitch-1 2.5s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-2 3s infinite linear alternate-reverse; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-crt-turn-on { animation: crt-turn-on 0.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </div>
  );
};

export default LandingPage;