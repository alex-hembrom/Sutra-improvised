// File: src/components/Wizard/Wizard.jsx
import React, { useState } from "react";
import Level1_Problem from "./Level1_Problem";
import Level2_Goal from "./Level2_Goal";            // New Import
import Level2_Stakeholders from "./Level2_Stakeholders"; 
import Level3_Activities from "./Level3_Activities";
import Level5_Indicators from "./Level5_Indicators"; // New Import
import Level4_Review from "./Level4_Review";
import { TypeAnimation } from "react-type-animation";

// 1. IMPORT FIREBASE TOOLS
import { db } from "../../firebase"; 
import { doc, setDoc } from "firebase/firestore";

// 2. RECEIVE userId PROP
const Wizard = ({ level, setLevel, userId }) => {
  
  // Updated State with new fields
  const [formData, setFormData] = useState({
    problem: "",
    goal: "",         // New Field
    stakeholders: [],
    activities: {},
    indicators: []    // New Field
  });

  // 3. THE SAVE FUNCTION
  const saveDataToCloud = async () => {
    if (!userId) return; 

    try {
      await setDoc(doc(db, "programs", userId), {
        ...formData,
        lastUpdated: new Date()
      }, { merge: true });
      console.log("Mission Saved to Cloud!");
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  // 4. UPDATED NEXT LEVEL
  const nextLevel = () => {
    saveDataToCloud(); // Save before moving
    setLevel((prev) => prev + 1);
  };

  const prevLevel = () => setLevel((prev) => prev - 1);
  const updateData = (field, value) =>
    setFormData({ ...formData, [field]: value });

  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* HUD HEADER */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
            <span className="text-cyan-400 opacity-50">///</span> 
            PHASE 0{level}
            <span className="text-sm font-mono text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
              {level === 1 && "DIAGNOSTIC"}
              {level === 2 && "TARGET_LOCK"}  {/* New Name */}
              {level === 3 && "TEAM_BUILD"}   {/* Shifted */}
              {level === 4 && "TACTICS"}      {/* Shifted */}
              {level === 5 && "SENSORS"}      {/* New Name */}
              {level === 6 && "EXECUTION"}    {/* Shifted */}
            </span>
          </h2>
          
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

        {/* HOLOGRAPHIC NODE MAP (Updated to 6 Steps) */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <div key={step} className="flex items-center">
              {index > 0 && (
                <div className={`h-[2px] w-8 md:w-12 transition-all duration-700 ${
                  step <= level ? "bg-cyan-500 shadow-[0_0_10px_#06b6d4]" : "bg-slate-800"
                }`}></div>
              )}

              <div className={`
                relative w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10
                ${step === level 
                  ? "border-cyan-400 bg-cyan-900/50 scale-125 shadow-[0_0_20px_#06b6d4] text-white" 
                  : step < level
                    ? "border-cyan-600 bg-cyan-950 text-cyan-500"
                    : "border-slate-700 bg-slate-900 text-slate-600"
                }
              `}>
                <span className="font-mono text-xs font-bold">{step}</span>
                {step === level && (
                  <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-75"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN INTERFACE */}
      <div className="animate-border-glow">
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* LEVEL 1: Problem */}
            {level === 1 && (
              <Level1_Problem data={formData} update={updateData} next={nextLevel} />
            )}

            {/* LEVEL 2: Goal (New) */}
            {level === 2 && (
              <Level2_Goal data={formData} update={updateData} next={nextLevel} back={prevLevel} />
            )}

            {/* LEVEL 3: Stakeholders (Was Lvl 2) */}
            {level === 3 && (
              <Level2_Stakeholders data={formData} update={updateData} next={nextLevel} back={prevLevel} />
            )}

            {/* LEVEL 4: Activities (Was Lvl 3) */}
            {level === 4 && (
              <Level3_Activities data={formData} update={updateData} next={nextLevel} back={prevLevel} />
            )}

            {/* LEVEL 5: Indicators (New) */}
            {level === 5 && (
              <Level5_Indicators data={formData} update={updateData} next={nextLevel} back={prevLevel} />
            )}

            {/* LEVEL 6: Review (Was Lvl 4) */}
            {level === 6 && (
              <Level4_Review data={formData} back={prevLevel} />
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 px-2 text-[10px] text-cyan-900/60 font-mono uppercase tracking-widest">
        <span>SESSION ID: {userId ? userId.slice(0, 8) : "ANON"}</span> {/* Shows simplified User ID */}
        <span>ENCRYPTION: AES-256</span>
      </div>
    </div>
  );
};

export default Wizard;