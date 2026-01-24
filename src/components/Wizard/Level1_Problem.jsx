import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Level1_Problem = ({ data, update, next, back }) => {
  const [analysisScore, setAnalysisScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (data.problem && data.problem.length > 0) {
      const fullText = data.problem;
      
      update("problem", ""); 

      let currentIndex = 0;
      const typingSpeed = 30;

      const interval = setInterval(() => {
        currentIndex++;
        update("problem", fullText.substring(0, currentIndex));

        if (currentIndex === fullText.length) {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, []); 

  useEffect(() => {
    const length = data.problem ? data.problem.length : 0;
    const score = Math.min(Math.floor((length / 50) * 100), 100);
    setAnalysisScore(score);
  }, [data.problem]);

  const problemIdeas = [
    "📉 FLN Gap: Grade 3 Students cannot read Grade 2 text",
    "🏫 Infrastructure: Lack of functional smart labs in District X",
    "🚫 Attendance: High dropout rate among girls in secondary school"
  ];

  return (
    <div className="animate-fade-in text-white">
      
      <div className="mb-8 border-b border-white/10 pb-6">
        <h2 className="text-4xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          SYSTEM DIAGNOSTIC
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          To activate the <span className="text-cyan-400 font-bold">1 Million School Impact Model</span>, we must first isolate the root variable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          <div>
            <label className="block text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">
              // Enter Problem Statement
            </label>
            <textarea
              className="w-full bg-black/50 border border-slate-700 rounded-lg p-6 text-white text-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-none h-48 transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] font-mono"
              placeholder="> Initialize problem definition..."
              value={data.problem}
              onChange={(e) => update("problem", e.target.value)}
            />
          </div>

          <div>
            <span className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Quick Inject Protocols:</span>
            <div className="flex flex-wrap gap-3">
              {problemIdeas.map((idea) => (
                <button
                  key={idea}
                  onClick={() => update("problem", idea)}
                  className="text-xs bg-slate-800 hover:bg-cyan-900/30 hover:border-cyan-500/50 border border-slate-700 px-4 py-2 rounded-full transition-all duration-300 text-gray-300 hover:text-cyan-400 text-left"
                >
                  + {idea}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          
          <div className="bg-slate-900/80 rounded-xl border border-cyan-500/30 p-6 shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden min-h-[300px] flex flex-col">
            
            <div className="flex justify-between items-center mb-4 border-b border-cyan-500/20 pb-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                AI Assistant
              </h3>
              <span className="text-[10px] text-cyan-700 font-mono">V.2.0</span>
            </div>

            <div className="flex-1 flex items-start text-sm font-mono leading-relaxed text-cyan-100/90 overflow-y-auto custom-scrollbar">
              
              {!showHint ? (
                <div className="w-full h-full flex items-center justify-center">
                    <button
                    onClick={() => setShowHint(true)}
                    className="group relative px-6 py-2 bg-cyan-900/40 border border-cyan-500/50 rounded hover:bg-cyan-500/20 transition-all w-full"
                    >
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <span className="flex items-center justify-center gap-2 text-cyan-300 font-bold tracking-wider animate-pulse">
                        <span>⚡</span> REQUEST BRIEFING
                    </span>
                    </button>
                </div>
              ) : (
                <TypeAnimation
                  style={{ whiteSpace: 'pre-line', display: 'block' }} 
                  sequence={[
                    "Welcome, Agent.",
                    1000,
                    "Welcome, Agent.\n\nYour objective is precision.",
                    800,
                    "Welcome, Agent.\n\nYour objective is precision.\n\nDo not say: 'Education is bad.'",
                    800,
                    "Welcome, Agent.\n\nYour objective is precision.\n\nDo not say: 'Education is bad.'\n\nInstead, specify: 'Grade 5 students in rural districts lack reading fluency.'",
                    1500,
                    "Welcome, Agent.\n\nYour objective is precision.\n\nDo not say: 'Education is bad.'\n\nInstead, specify: 'Grade 5 students in rural districts lack reading fluency.'\n\nThe more specific your target, the higher your impact probability.\n\nAwaiting your input...",
                  ]}
                  speed={75} 
                  cursor={true}
                  repeat={0} 
                />
              )}
            </div>

            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 animate-[scan_3s_linear_infinite]"></div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex justify-between text-xs mb-2 font-bold text-gray-400">
              <span>DEFINITION CLARITY</span>
              <span className={analysisScore > 80 ? "text-green-400" : "text-cyan-600"}>{analysisScore}%</span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${
                  analysisScore > 50 ? "bg-gradient-to-r from-cyan-500 to-green-400" : "bg-cyan-900"
                }`}
                style={{ width: `${analysisScore}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between pt-8 border-t border-white/5 mt-8">
        <button
          onClick={back}
          className="group relative px-8 py-3 overflow-hidden rounded-lg font-bold transition-all bg-slate-700 hover:bg-slate-600 text-white shadow-[0_0_20px_rgba(15,23,42,0.4)] hover:shadow-[0_0_20px_rgba(71,85,105,0.4)]"
        >
          <div className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-2">
            <span className="text-lg">←</span> BACK
          </span>
        </button>
        <button
          onClick={next}
          disabled={!data.problem}
          className={`group relative px-8 py-3 overflow-hidden rounded-lg font-bold transition-all ${
            data.problem
              ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              : "bg-slate-800 text-slate-500 cursor-not-allowed"
          }`}
        >
          <div className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-2">
            INITIATE PHASE 02 <span className="text-lg">→</span>
          </span>
        </button>
      </div>

    </div>
  );
};

export default Level1_Problem;