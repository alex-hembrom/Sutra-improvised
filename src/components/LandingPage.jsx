import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Robot images
import roboReading from "../assets/robo-reading.png";
import roboThinking from "../assets/robo-thinking.png";
import roboBlinking from "../assets/robo-blinking.png";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  const navigate = useNavigate();
  const [animationFinished, setAnimationFinished] = useState(false);

  // Boot sequence timeout
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimationFinished(true);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  return (
 
    <div className="w-full relative font-sans text-white selection:bg-cyan-500/30">
      
      {/* 1. BACKGROUND LAYER (Fixed & Clipped) */}
      {/* This layer handles all the glows/grids so they don't mess up the scroll layout */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] sm:w-[400px] sm:h-[400px] bg-purple-600/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] sm:w-[400px] sm:h-[400px] bg-blue-600/20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 mix-blend-screen animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-scroll opacity-50"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 subtle-gradient opacity-60"></div>
      </div>

      {/* 2. HUD LAYER (Fixed on top) */}
      <div className="fixed inset-0 pointer-events-none z-50 p-4 sm:p-6 hidden md:block">
        <div className="absolute top-24 left-4 sm:left-6 border-l-2 border-t-2 border-cyan-500/50 w-16 h-16 sm:w-32 sm:h-32 rounded-tl-3xl opacity-60"></div>
        <div className="absolute top-28 left-8 sm:left-10 font-mono text-xs text-cyan-400">
          <div>
            SYS.STATUS:{" "}
            <span className="text-green-400 animate-pulse">ONLINE</span>
          </div>
          <div>LOC: 22.88.11</div>
        </div>
        <div className="absolute bottom-6 left-4 sm:left-6 border-l-2 border-b-2 border-cyan-500/50 w-16 h-16 sm:w-32 sm:h-32 rounded-bl-3xl opacity-60"></div>
        <div className="absolute bottom-8 left-8 sm:left-10 font-mono text-xs text-cyan-400 opacity-50">
          /// SUTRA.OS.VER.2.0 ///
        </div>
        <div className="absolute bottom-6 right-4 sm:right-6 border-r-2 border-b-2 border-purple-500/50 w-16 h-16 sm:w-32 sm:h-32 rounded-br-3xl opacity-60"></div>
      </div>

      {/* 3. CONTENT LAYER (Scrollable) */}
      {}
      <div className={`relative z-10 flex flex-col w-full min-h-screen ${!animationFinished ? 'animate-crt-turn-on' : 'opacity-100'}`}>
        
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-10 gap-6 md:gap-10">
          
          {/* Left: Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:pl-8 w-full">
            <div className="relative mb-4 sm:mb-6 group w-full">
              <h1
                className="text-5xl sm:text-7xl md:text-9xl font-thin tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-cyan-400 via-white to-purple-500 relative z-10 w-full"
                style={{
                  fontFamily: "Samarkan, sans-serif",
                  textShadow: "0 0 30px rgba(6,182,212,0.6), 0 0 60px rgba(168,85,247,0.5)",
                  letterSpacing: "-2px",
                  fontWeight: 300,
                }}
              >
                SUTRA
              </h1>
              {/* Glitch layers */}
              <h1 className="absolute top-0 left-0 text-5xl sm:text-7xl md:text-9xl tracking-tighter text-cyan-300 opacity-0 group-hover:opacity-50 animate-glitch-1 w-full" style={{ fontFamily: "Samarkan, sans-serif", letterSpacing: "-2px", fontWeight: 300 }} aria-hidden="true">SUTRA</h1>
              <h1 className="absolute top-0 left-0 text-5xl sm:text-7xl md:text-9xl tracking-tighter text-purple-300 opacity-0 group-hover:opacity-50 animate-glitch-2 w-full" style={{ fontFamily: "Samarkan, sans-serif", letterSpacing: "-2px", fontWeight: 300 }} aria-hidden="true">SUTRA</h1>
            </div>

            <div className="text-cyan-500 font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] mb-8 sm:mb-12 md:mb-16 uppercase border-y border-cyan-500/30 py-2 sm:py-2 w-full max-w-xs sm:max-w-sm md:max-w-lg bg-cyan-950/20 backdrop-blur-md px-2 sm:px-4 min-h-[3rem] flex items-center justify-center">
  <span className="text-cyan-400 opacity-50 mr-2">///</span>
  <TypeAnimation
    sequence={[
      "ARCHITECTING EDUCATIONAL INTELLIGENCE",
      2000, 
      "DESIGNING SYSTEMIC CHANGE",
      2000,
      "BUILDING FUTURE FRAMEWORKS",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    cursor={true}
    className="inline-block"
  />
  <span className="text-cyan-400 opacity-50 ml-2">///</span>
</div>

            <div className="relative group mb-8 sm:mb-12 md:mb-16 w-full flex justify-center md:justify-start">
              <button
                onClick={() => navigate("/login")}
                className="relative w-52 sm:w-60 md:w-64 h-12 sm:h-14 md:h-16 bg-black border border-cyan-500/50 flex items-center justify-center gap-3 sm:gap-4 overflow-hidden hover:border-cyan-400 transition-all group-hover:w-60 sm:group-hover:w-72 md:group-hover:w-80"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
              >
                <div className="absolute inset-0 bg-cyan-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="font-display font-bold text-base sm:text-lg md:text-xl tracking-widest text-white z-10 whitespace-nowrap">
                  INITIATE
                </span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rotate-45 animate-pulse z-10"></div>
              </button>
            </div>
          </div>

          {/* Right: Robot image */}
          <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0 w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22vw] sm:w-[30vw] md:w-[35vw] max-w-[700px] h-[22vw] sm:h-[30vw] md:h-[35vw] max-h-[700px] bg-cyan-500/20 blur-[50px] sm:blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow"></div>
            <div className="animate-float z-10 relative w-full">
              <img src={roboReading} alt="Sutra Assistant" className="w-full max-w-xs sm:max-w-lg md:max-w-2xl h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full px-4 sm:px-6 md:px-8 mb-16 sm:mb-20 md:mb-20 mx-auto">
          {[
            { title: "LOGIC CORE", icon: "❖", desc: "Advanced node-based logic construction." },
            { title: "AUTO-LFA", icon: "⚡", desc: "Instantaneous ISO-standard generation." },
            { title: "IMPACT SYNC", icon: "◈", desc: "Real-time mission alignment protocols." },
          ].map((feature, idx) => (
            <div key={idx} className="group relative p-4 sm:p-6 md:p-8 bg-black/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm rounded-lg">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-slate-700 group-hover:text-cyan-400 transition-colors font-display">{feature.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-300">{feature.title}</h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 group-hover:text-slate-300">{feature.desc}</p>
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full group-hover:animate-scan"></div>
            </div>
          ))}
        </div>

        {/* Problem Statement Section */}
        <div id="problem-statement" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-20 sm:mb-24 md:mb-32 relative z-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 flex justify-center items-center relative order-2 md:order-1 w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] bg-red-600/20 blur-[50px] rounded-full animate-pulse-slow"></div>
              <div className="animate-float z-10 relative" style={{ animationDelay: "1s" }}>
                <img src={roboThinking} alt="Analyzing Problem" className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <div className="bg-slate-900/50 border-l-4 border-red-500 p-6 sm:p-8 md:p-12 relative overflow-hidden backdrop-blur-md rounded-r-xl">
                <div className="absolute right-0 top-0 text-[8rem] font-black text-red-500/5 z-0 pointer-events-none font-display">ERROR</div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-red-400 mb-4 flex items-center gap-3">
                    <span className="animate-pulse">⚠️</span> PROBLEM STATEMENT
                  </h2>
                  <p className="text-slate-300 font-mono leading-relaxed text-xs sm:text-sm md:text-base text-justify">
                    Many organisations (NGOs/CSOs) working in education struggle to clearly design their programs before starting or scaling their work. They often know what they want to improve, but find it difficult to clearly define the problem, identify the right stakeholders, decide what needs to change in day-to-day practice, and understand how those changes will be measured.
                    <br /><br />
                    As a result, program design becomes slow, dependent on experts, and expensive. What organisations need right now is a simple, guided way to think through these questions step by step. This can be translated into a digital or gamified platform that helps organisations move from idea to action by clearly walking them through a checklist: define the problem, identify the student-level change, decide the approach, map key stakeholders, specify expected practice changes, and choose simple indicators to track progress.
                    <br /><br />
                    <span className="text-red-300 border-b border-red-500/30 pb-1">The task is to build a gamified tool that makes this process easy to follow.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div id="solution" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-20 sm:mb-24 md:mb-32 relative z-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 w-full">
              <div className="bg-slate-900/50 border-r-4 border-cyan-500 p-6 sm:p-8 md:p-12 relative overflow-hidden backdrop-blur-md text-right rounded-l-xl">
                <div className="absolute left-0 top-0 text-[8rem] font-black text-cyan-500/5 z-0 pointer-events-none font-display">SOLVED</div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-cyan-400 mb-4 flex items-center justify-end gap-3">
                    SYSTEM SOLUTION <span className="animate-pulse">⚡</span>
                  </h2>
                  <p className="text-slate-300 font-mono leading-relaxed text-xs sm:text-sm md:text-base text-justify" style={{ direction: "rtl", textAlign: "left" }}>
                    SUTRA acts as a digital architect for social change. By transforming the complex Logical Framework Approach into a gamified "Mission Control" interface, we empower non-technical teams to build rigorous program designs without needing external experts.
                    <br /><br />
                    Our system guides users through a "Phase-based" journey—from diagnosing the root problem to mapping stakeholders and selecting indicators—using AI-driven prompts and visual logic maps. This ensures that every NGO, regardless of size, can create a funder-ready impact strategy in minutes, not months. We bridge the gap between "Idea" and "Execution" with zero technical friction.
                  </p>
                  <div className="flex flex-wrap justify-end gap-2 mt-6 font-mono text-[10px] sm:text-xs text-cyan-600">
                    <span className="border border-cyan-900 px-2 py-1 bg-cyan-950/30">AI_ASSIST: ACTIVE</span>
                    <span className="border border-cyan-900 px-2 py-1 bg-cyan-950/30">LFA_ENGINE: V.2.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] bg-cyan-500/20 blur-[50px] rounded-full animate-pulse-slow"></div>
              <div className="animate-float z-10 relative" style={{ animationDelay: "2s" }}>
                <img src={roboBlinking} alt="Solution Found" className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* Animations */
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.25; transform: scale(1) translate(-50%, -50%); } 50% { opacity: 0.4; transform: scale(1.1) translate(-50%, -50%); } }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-scan { animation: scan 1.5s linear infinite; }
        @keyframes glitch-1 { 0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); } 20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); } 100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); } }
        .animate-glitch-1 { animation: glitch-1 2.5s infinite linear alternate-reverse; }
        @keyframes glitch-2 { 0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); } 100% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 1px); } }
        .animate-glitch-2 { animation: glitch-2 3s infinite linear alternate-reverse; }
        @keyframes crt-turn-on { 0% { transform: scaleY(0) scaleX(0); opacity: 0; filter: brightness(0); } 50% { transform: scaleY(0.02) scaleX(1); opacity: 1; filter: brightness(5); } 100% { transform: scaleY(1) scaleX(1); opacity: 1; filter: brightness(1); } }
        .animate-crt-turn-on { animation: crt-turn-on 0.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .subtle-gradient { background: radial-gradient(ellipse at 10% 20%, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.00) 30%), linear-gradient(120deg, rgba(99,102,241,0.18), rgba(236,72,153,0.10), rgba(56,189,248,0.10)); background-size: 200% 200%; filter: blur(20px); }
      `}</style>
    </div>
  );
};

export default LandingPage;