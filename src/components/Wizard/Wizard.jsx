import React, { useState } from "react";
import Level1_Problem from "./Level1_Problem";
import Level2_Goal from "./Level2_Goal";
import Level2_Stakeholders from "./Level2_Stakeholders";
import Level3_Activities from "./Level3_Activities";
import Level5_Indicators from "./Level5_Indicators";
import Level4_Review from "./Level4_Review";
import { TypeAnimation } from "react-type-animation";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

// --- 1. THE PATTERN LIBRARY (Templates) ---
const TEMPLATES = {
  blank: {
    title: "FRESH PROTOCOL",
    desc: "Start with a blank slate. Full manual control.",
    data: { problem: "", goal: "", stakeholders: [], activities: {}, indicators: [] }
  },
  fln: {
    title: "OPERATION: FLN",
    desc: "Foundational Literacy & Numeracy intervention model.",
    data: {
      problem: "Grade 3 students in rural districts lack basic reading fluency.",
      goal: "80% of Grade 3 students achieve reading fluency by year-end.",
      stakeholders: ["teachers", "hm", "parents"],
      activities: {
        teachers: "Conduct daily 30-min reading circles using phonics kits.",
        hm: "Monitor teacher attendance and reading hour compliance.",
        parents: "Dedicate 15 mins/day to listen to child reading at home."
      },
      indicators: []
    }
  },
  stem: {
    title: "PROJECT: STEM LABS",
    desc: "High-school science infrastructure and utilization.",
    data: {
      problem: "Science labs are non-functional and locked in 40% of schools.",
      goal: "100% of labs are functional and used weekly by students.",
      stakeholders: ["hm", "district", "students"],
      activities: {
        hm: "Allocate budget for lab repair and consumables.",
        district: "Conduct surprise inspection of lab usage.",
        students: "Maintain lab usage logbook and equipment registry."
      },
      indicators: []
    }
  }
};

const Wizard = ({ userId }) => {
  // START AT LEVEL 0 (Mission Select)
  const [level, setLevel] = useState(0); 

  const [formData, setFormData] = useState({
    problem: "",
    goal: "",
    stakeholders: [],
    activities: {},
    indicators: []
  });

  // --- TEMPLATE HANDLER ---
  const loadTemplate = (key) => {
    setFormData({ ...formData, ...TEMPLATES[key].data });
    setLevel(1); // Warp to Phase 1
  };

  const saveDataToCloud = async () => {
    if (!userId) return;
    try {
      await setDoc(doc(db, "programs", userId), {
        ...formData,
        lastUpdated: new Date()
      }, { merge: true });
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  const nextLevel = () => {
    saveDataToCloud();
    setLevel((prev) => prev + 1);
  };

  const prevLevel = () => setLevel((prev) => prev - 1);
  const updateData = (field, value) => setFormData({ ...formData, [field]: value });

  return (
    <div className="w-full"> 
      
      {/* HUD HEADER (Hidden on Mission Select Screen for dramatic effect) */}
      {level > 0 && (
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyan-400 opacity-50">///</span> 
              PHASE 0{level}
              <span className="text-sm font-mono text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                {level === 1 && "DIAGNOSTIC"}
                {level === 2 && "TARGET_LOCK"}
                {level === 3 && "TEAM_BUILD"}
                {level === 4 && "TACTICS"}
                {level === 5 && "SENSORS"}
                {level === 6 && "EXECUTION"}
              </span>
            </h2>
            
            <div className="text-cyan-600 text-xs tracking-widest uppercase font-mono mt-2 flex items-center gap-2 min-h-[24px]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <TypeAnimation
                sequence={["ESTABLISHING UPLINK...", 2000, "SYSTEM STABLE.", 5000]}
                speed={70}
                repeat={Infinity}
                cursor={false}
              />
            </div>
          </div>

          {/* HOLOGRAPHIC MAP */}
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
      )}

      {/* MAIN INTERFACE */}
      <div className="animate-border-glow">
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative z-10">
            
            {/* --- LEVEL 0: MISSION SELECT (NEW) --- */}
            {level === 0 && (
              <div className="text-center pt-10">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                  SELECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">MISSION PROFILE</span>
                </h1>
                <p className="text-slate-400 font-mono mb-12">CHOOSE A TEMPLATE TO INITIALIZE PROTOCOLS</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(TEMPLATES).map(([key, template]) => (
                    <button 
                      key={key}
                      onClick={() => loadTemplate(key)}
                      className="group relative bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 p-8 rounded-xl transition-all hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] text-left"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 font-display">{template.title}</h3>
                      <p className="text-sm text-slate-400 font-mono">{template.desc}</p>
                      <div className="absolute bottom-4 right-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        INITIALIZE &rarr;
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {level === 1 && <Level1_Problem data={formData} update={updateData} next={nextLevel} />}
            {level === 2 && <Level2_Goal data={formData} update={updateData} next={nextLevel} back={prevLevel} />}
            {level === 3 && <Level2_Stakeholders data={formData} update={updateData} next={nextLevel} back={prevLevel} />}
            {level === 4 && <Level3_Activities data={formData} update={updateData} next={nextLevel} back={prevLevel} />}
            {level === 5 && <Level5_Indicators data={formData} update={updateData} next={nextLevel} back={prevLevel} />}
            {level === 6 && <Level4_Review data={formData} back={prevLevel} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;