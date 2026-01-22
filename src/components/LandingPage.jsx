import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroRobot from "../assets/hero-robot.png";
import cloudFloor from "../assets/cloud-floor.png"; // Import the cloud image

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
    // OUTER CONTAINER (Relative wrapper)
    <div className="min-h-screen bg-[#050510] flex flex-col relative overflow-x-hidden no-scrollbar font-sans text-white selection:bg-cyan-500/30 animate-crt-turn-on pt-24">
      
      {/* 1. REPLACED GRID WITH CLOUD IMAGE HERE 
          This is the "outer container" background layer.
      */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cloudFloor} 
          alt="Cloud Background" 
          className="w-full h-full object-cover opacity-60" 
        />
        {/* Optional dark overlay to ensure text is readable on top of clouds */}
        <div className="absolute inset-0 bg-[#050510]/60 mix-blend-multiply"></div>
      </div>

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

      {/* CORNER GLOWS */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-purple-600/25 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse-slow"></div>
      </div>
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-600/25 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 mix-blend-screen animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* MIDDLE CONTAINER (Content) */}
      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 px-6 md:px-12 mt-10 mb-20">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col items-start justify-center text-left order-2 md:order-1">
          <div className="relative mb-6 group">
            <h1 className="text-7xl md:text-9xl font-thin tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 via-white to-cyan-200 relative z-10" 
                style={{fontFamily: 'Samarkan, sans-serif', textShadow: '0 0 30px rgba(6,182,212,0.8), 0 0 60px rgba(34,211,238,0.6), 0 0 90px rgba(6,182,212,0.4)', letterSpacing: '-2px', fontWeight: 300}}>
              SUTRA
            </h1>
            <h1 className="absolute top-0 left-0 text-7xl md:text-9xl tracking-tighter text-cyan-300 opacity-0 group-hover:opacity-50 animate-glitch-1" style={{fontFamily: 'Samarkan, sans-serif', letterSpacing: '-2px', fontWeight: 300}} aria-hidden="true">SUTRA</h1>
            <h1 className="absolute top-0 left-0 text-7xl md:text-9xl tracking-tighter text-purple-300 opacity-0 group-hover:opacity-50 animate-glitch-2" style={{fontFamily: 'Samarkan, sans-serif', letterSpacing: '-2px', fontWeight: 300}} aria-hidden="true">SUTRA</h1>
          </div>
          
          <p className="text-cyan-500 font-mono text-xs md:text-sm tracking-[0.5em] mb-12 uppercase text-left border-y border-cyan-500/30 py-2 w-full max-w-lg bg-cyan-950/20 backdrop-blur-md">
            /// ARCHITECTING EDUCATIONAL INTELLIGENCE ///
          </p>

          <div className="relative group mb-8">
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
        </div>

        {/* RIGHT COLUMN: ROBOT + 3D GLOW */}
        <div className="flex justify-center md:justify-end items-center order-1 md:order-2 relative h-[50vh] md:h-auto">
           {/* 3D GLOWING EFFECT BEHIND ROBOT */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/20 blur-[80px] rounded-full animate-pulse-slow pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/10 blur-[60px] rounded-full animate-pulse pointer-events-none mix-blend-screen"></div>
           
           <img 
            src={heroRobot} 
            alt="SUTRA AI Robot" 
            className="w-full max-w-[500px] md:max-w-[650px] h-auto object-contain z-10 animate-float drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]" 
           />
        </div>

      </div>

      {/* FEATURES CARDS */}
      <div className="flex justify-center w-full px-4 mb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {[
            { title: "LOGIC CORE", icon: "❖", desc: "Advanced node-based logic construction." },
            { title: "AUTO-LFA", icon: "⚡", desc: "Instantaneous ISO-standard generation." },
            { title: "IMPACT SYNC", icon: "◈", desc: "Real-time mission alignment protocols." }
          ].map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-slate-900/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
              <div className="text-5xl mb-4 text-slate-700 group-hover:text-cyan-400 transition-colors font-display">{feature.icon}</div>
              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-300">{feature.title}</h3>
              <p className="text-sm font-mono text-slate-400 group-hover:text-slate-300">{feature.desc}</p>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:animate-scan"></div>
            </div>
          ))}
        </div>
      </div>

      {/* === SECTION 1: PROBLEM STATEMENT === */}
      <div className="flex flex-col items-center w-full">
        <div id="problem-statement" className="w-full max-w-6xl px-4 mb-24 relative z-10">
          <div className="bg-slate-900/60 border-l-4 border-red-500 p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
            <div className="absolute right-0 top-0 text-[10rem] font-black text-red-500/5 z-0 pointer-events-none font-display">ERROR</div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-red-400 mb-6 flex items-center gap-4">
                <span className="animate-pulse">⚠️</span> PROBLEM STATEMENT
              </h2>
              <p className="text-slate-300 font-mono leading-relaxed text-sm md:text-base text-justify">
                Many organisations (NGOs/CSOs) working in education struggle to clearly design their programs before starting or scaling their work. They often know what they want to improve, but find it difficult to clearly define the problem, identify the right stakeholders, decide what needs to change in day-to-day practice, and understand how those changes will be measured. 
                <br /><br />
                As a result, program design becomes slow, dependent on experts, and expensive. What organisations need right now is a simple, guided way to think through these questions step by step. This can be translated into a digital or gamified platform that helps organisations move from idea to action by clearly walking them through a checklist: define the problem, identify the student-level change, decide the approach, map key stakeholders, specify expected practice changes, and choose simple indicators to track progress.
                <br /><br />
                <span className="text-red-300 border-b border-red-500/30 pb-1">The task is to build a gamified tool that makes this process easy to follow, practical to use, and accessible to teams without technical or design expertise.</span>
              </p>
            </div>
          </div>
        </div>

        {/* === SECTION 2: SOLUTION === */}
        <div id="solution" className="w-full max-w-6xl px-4 mb-32 relative z-10">
          <div className="bg-slate-900/60 border-r-4 border-cyan-500 p-8 md:p-12 relative overflow-hidden backdrop-blur-md text-right">
             <div className="absolute left-0 top-0 text-[10rem] font-black text-cyan-500/5 z-0 pointer-events-none font-display">SOLVED</div>
             <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cyan-400 mb-6 flex items-center justify-end gap-4">
                SYSTEM SOLUTION <span className="animate-pulse">⚡</span> 
              </h2>
              <p className="text-slate-300 font-mono leading-relaxed text-sm md:text-base text-justify" style={{ direction: "rtl", textAlign: "left" }}>
                SUTRA acts as a digital architect for social change. By transforming the complex Logical Framework Approach into a gamified "Mission Control" interface, we empower non-technical teams to build rigorous program designs without needing external experts. 
                <br /><br />
                Our system guides users through a "Phase-based" journey—from diagnosing the root problem to mapping stakeholders and selecting indicators—using AI-driven prompts and visual logic maps. This ensures that every NGO, regardless of size, can create a funder-ready impact strategy in minutes, not months. We bridge the gap between "Idea" and "Execution" with zero technical friction.
              </p>
              
              <div className="flex justify-end gap-4 mt-8 font-mono text-xs text-cyan-600">
                <span className="border border-cyan-900 px-2 py-1 bg-cyan-950/30">AI_ASSIST: ACTIVE</span>
                <span className="border border-cyan-900 px-2 py-1 bg-cyan-950/30">LFA_ENGINE: V.2.0</span>
                <span className="border border-cyan-900 px-2 py-1 bg-cyan-950/30">USER_FRIENDLY: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* --- Hide Scrollbar --- */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* --- Animations --- */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.4; transform: scale(1.1) translate(-50%, -50%); }
        }
        @keyframes pulse-slow-br {
           0%, 100% { opacity: 0.25; transform: scale(1) translate(50%, 50%); }
           50% { opacity: 0.4; transform: scale(1.1) translate(50%, 50%); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-scan { animation: scan 1.5s linear infinite; }
        .animate-glitch-1 { animation: glitch-1 2.5s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-2 3s infinite linear alternate-reverse; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-crt-turn-on { animation: crt-turn-on 0.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;