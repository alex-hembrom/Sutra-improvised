import React, { useState, useEffect } from "react";
import Level1_Problem from "./Level1_Problem";
import Level2_Stakeholders from "./Level2_Stakeholders";
import Level3_Activities from "./Level3_Activities";
import Level4_Review from "./Level4_Review";
import { TypeAnimation } from "react-type-animation";

const Wizard = ({level,setLevel}) => {
  // const [currentLevel, setCurrentLevel] = useState(1);
  const [formData, setFormData] = useState({
    problem: "",
    goal: "",
    stakeholders: [],
    activities: {},
  });

  const nextLevel = () => setLevel((prev) => prev + 1);
  const prevLevel = () => setLevel((prev) => prev - 1);
  const updateData = (field, value) =>
    setFormData({ ...formData, [field]: value });

  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* 1. NEW HUD HEADER */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
        
        {/* Left: Mission Log */}
        {/* Left: Mission Log */}
        <div>
          <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
            <span className="text-cyan-400 opacity-50">///</span> 
            PHASE 0{level}
            <span className="text-sm font-mono text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
              {level === 1 && "DIAGNOSTIC"}
              {level === 2 && "TEAM_BUILD"}
              {level === 3 && "TACTICS"}
              {level === 4 && "EXECUTION"}
            </span>
          </h2>
          
          {/* FIX: Added 'min-h-[24px]' here. 
             This forces the box to stay 24px tall even when text is deleted. 
          */}
          <div className="text-cyan-600 text-xs tracking-widest uppercase font-mono mt-2 flex items-center gap-2 min-h-[24px]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <TypeAnimation
              sequence={[
                "ESTABLISHING UPLINK...", 2000,
                "SYSTEM STABLE.", 5000,
                "RECORDING INPUTS...", 3000
              ]}
              speed={70}
              repeat={Infinity}
              cursor={false}
            />
          </div>
        </div>

        {/* Right: THE NEW HOLOGRAPHIC NODE MAP */}
        <div className="flex items-center">
          {/* We map through steps 1 to 4 */}
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="flex items-center">
              
              {/* The Connecting Line (Hidden for first item) */}
              {index > 0 && (
                <div className={`h-[2px] w-12 md:w-16 transition-all duration-700 ${
                  step <= level ? "bg-cyan-500 shadow-[0_0_10px_#06b6d4]" : "bg-slate-800"
                }`}></div>
              )}

              {/* The Node (Circle) */}
              <div className={`
                relative w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10
                ${step === level 
                  ? "border-cyan-400 bg-cyan-900/50 scale-125 shadow-[0_0_20px_#06b6d4] text-white" 
                  : step < level
                    ? "border-cyan-600 bg-cyan-950 text-cyan-500" // Completed
                    : "border-slate-700 bg-slate-900 text-slate-600" // Future
                }
              `}>
                {/* Node Number */}
                <span className="font-mono text-xs font-bold">{step}</span>

                {/* Pulsing Ring for Active Step */}
                {step === level && (
                  <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-75"></div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>


      {/* 2. THE MAIN INTERFACE */}
      <div className="animate-border-glow">
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden min-h-[500px]">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* Render Level */}
          <div className="relative z-10">
            {level === 1 && (
              <Level1_Problem
                data={formData}
                update={updateData}
                next={nextLevel}
              />
            )}
            {level === 2 && (
              <Level2_Stakeholders
                data={formData}
                update={updateData}
                next={nextLevel}
                back={prevLevel}
              />
            )}
            {level === 3 && (
              <Level3_Activities
                data={formData}
                update={updateData}
                next={nextLevel}
                back={prevLevel}
              />
            )}
            {level === 4 && (
              <Level4_Review data={formData} back={prevLevel} />
            )}
          </div>

        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between mt-4 px-2 text-[10px] text-cyan-900/60 font-mono uppercase tracking-widest">
        <span>SESSION ID: {Math.floor(Math.random() * 99999)}</span>
        <span>ENCRYPTION: AES-256</span>
      </div>
    </div>
  );
};

export default Wizard;