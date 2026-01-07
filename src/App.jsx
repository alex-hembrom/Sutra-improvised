import React, { useState } from 'react';
import Wizard from './components/Wizard/Wizard';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [started, setStarted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  
  // Lifted State for Background Rotation
  const [wizardLevel, setWizardLevel] = useState(1);

  const handleInitiate = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setStarted(true);
    }, 3500);
  };

  return (
    <div className="min-h-screen relative font-body text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 🌌 ROTATING BACKGROUND CONTAINER */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none flex items-center justify-center">
        
        {/* THE GIANT ROTATING SQUARE */}
        <div 
          className="relative w-[150vmax] h-[150vmax] transition-transform duration-[1500ms] ease-in-out flex items-center justify-center"
          // ROTATION LOGIC: 0deg -> 90deg -> 180deg -> 270deg
          style={{ transform: started ? `rotate(${(wizardLevel - 1) * 90}deg)` : 'rotate(0deg)' }}
        >
          
          {/* BLOB 1: Starts Top-Left, moves clockwise */}
          {/* I moved this to 'top-[15%] left-[15%]' so it orbits widely */}
          <div className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-[2000ms] ease-in-out animate-pulse
            ${started ? 'top-[15%] left-[15%] scale-150' : 'top-[30%] left-[30%]'}
            ${wizardLevel % 2 === 0 ? 'bg-purple-600' : 'bg-blue-600'} 
          `}></div>

          {/* BLOB 2: Starts Bottom-Right, moves clockwise */}
          {/* I moved this to 'bottom-[15%] right-[15%]' */}
          <div className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-[2000ms] ease-in-out delay-100 animate-pulse
            ${started ? 'bottom-[15%] right-[15%] scale-150' : 'bottom-[30%] right-[30%]'}
            ${wizardLevel % 2 === 0 ? 'bg-cyan-600' : 'bg-emerald-500'}
          `}></div>

          {/* Focus Light (Always Center) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] transition-all duration-1000
            ${started ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `}></div>

        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      {!started ? (
        <div className={`container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen relative transition-opacity duration-1000 ${isLaunching ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* HERO SECTION */}
          <div className="text-center max-w-4xl relative z-10 flex flex-col items-center">
            
            <div className="animate-float inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/50 bg-cyan-900/20 backdrop-blur-sm">
              <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase font-display">🚀 System V.1.0 Online</span>
            </div>

            <h1 className="font-display text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500 mb-6 drop-shadow-[0_0_35px_rgba(0,255,255,0.4)]">
              SUTRA
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed h-24">
              <span>Design Education Programs that are </span>
              <br/>
              <span className="text-cyan-400 font-bold font-display text-3xl">
                <TypeAnimation
                  sequence={['GAMIFIED.', 1500, 'DATA-DRIVEN.', 1500, 'SCALABLE.', 1500, 'ISO-STANDARD.', 1500]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </div>


            {/* CONTROL PANEL */}
            <div className="flex items-center gap-0 mt-8 scale-110 md:scale-125">
              
              <button 
                onClick={handleInitiate}
                className="group relative px-10 py-5 bg-black overflow-hidden skew-x-[-10deg] border-2 border-cyan-500 hover:bg-cyan-900/20 transition-colors z-20"
              >
                <div className="absolute inset-0 w-3 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                <span className="relative text-cyan-300 text-xl font-display font-bold tracking-widest group-hover:text-white skew-x-[10deg] inline-block">
                  INITIATE PROTOCOL
                </span>
                <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-6 bg-cyan-500 skew-x-[10deg]"></div>
              </button>

              <div className="relative w-24 h-10 flex items-center -ml-2 z-10">
                <svg width="100%" height="100%" viewBox="0 0 100 20" className="overflow-visible">
                  <path d="M0 10 H100" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                  <path 
                    d="M0 10 H100" 
                    stroke="#22d3ee" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className={`opacity-0 ${isLaunching ? 'animate-wire-shoot' : ''}`} 
                  />
                </svg>
              </div>

              {/* ARC REACTOR */}
              <div 
                className={`
                  relative w-20 h-20 -ml-4 z-20 overflow-visible 
                  transition-all duration-700 ease-in-out
                  ${isLaunching 
                    ? 'animate-reactor-surge' 
                    : 'opacity-80 hover:opacity-100 hover:rotate-[180deg] hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] cursor-pointer'
                  }
                `}
              >
                <svg 
                  viewBox="0 0 200 200" 
                  className={`w-full h-full overflow-visible ${!isLaunching && "drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"}`}
                >
                  <circle cx="100" cy="100" r="90" fill="#0f172a" stroke={isLaunching ? "#ffffff" : "#22d3ee"} strokeWidth="4" className="transition-colors duration-300" />
                  <circle cx="100" cy="100" r="70" stroke="#22d3ee" strokeWidth="10" strokeDasharray="30 10" className="opacity-50" />
                  <path d="M100 40L151 130H49L100 40Z" fill="none" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx="100" cy="100" r="20" fill="#0f172a" stroke={isLaunching ? "#ffffff" : "#22d3ee"} strokeWidth="2" />
                  <circle cx="100" cy="100" r="10" fill={isLaunching ? "#ffffff" : "#0f172a"} className="transition-colors duration-100" />
                </svg>
              </div>

            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl relative z-10">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:-translate-y-2 duration-300 group neon-box">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🧩</div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Logic Builder</h3>
              <p className="text-gray-400 text-sm">Drag-and-drop system design without the complex jargon.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-2 duration-300 group neon-box">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Instant LFA</h3>
              <p className="text-gray-400 text-sm">Generate ISO-standard Logical Frameworks in seconds.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-green-500/50 transition-all hover:-translate-y-2 duration-300 group neon-box">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Impact Ready</h3>
              <p className="text-gray-400 text-sm">Aligned with Shikshagraha's 1 Million School mission.</p>
            </div>
          </div>
          
        </div>
      ) : (
        /* THE WIZARD WRAPPER */
        <div className="py-10 animate-fade-in relative z-20">
          <Wizard level={wizardLevel} setLevel={setWizardLevel} />
        </div>
      )}
    </div>
  );
}

export default App;