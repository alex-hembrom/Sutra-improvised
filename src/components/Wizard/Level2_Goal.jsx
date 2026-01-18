import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Level2_Goal = ({ data, update, next, back }) => {
  const [showHint, setShowHint] = useState(false);

  const goalExamples = [
    "Students read Grade 3 text with 40+ wpm fluency.",
    "80% of students attend school 5 days a week.",
    "Students can solve 2-digit addition problems."
  ];

  return (
    <div className="animate-fade-in text-white">
      {/* HEADER */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <h2 className="text-4xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          MISSION OBJECTIVE
        </h2>
        <p className="text-gray-400 text-lg">
          If the problem is solved, what is the <span className="text-green-400 font-bold">visible change</span> for the student?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Input */}
        <div className="lg:col-span-2 space-y-6">
          <label className="block text-xs font-mono text-green-500 mb-2 uppercase tracking-widest">
            // Define Victory Condition
          </label>
          <textarea
            className="w-full bg-black/50 border border-slate-700 rounded-lg p-6 text-white text-lg focus:ring-2 focus:ring-green-500 focus:outline-none h-48 font-mono shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
            placeholder="> TARGET: Students will be able to..."
            value={data.goal}
            onChange={(e) => update("goal", e.target.value)}
          />

          {/* Quick Inject */}
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Tactical Presets:</span>
            <div className="flex flex-wrap gap-3">
              {goalExamples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => update("goal", ex)}
                  className="text-xs bg-slate-800 border border-slate-700 px-4 py-2 rounded-full hover:border-green-500 hover:text-green-400 transition-all"
                >
                  + {ex}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: AI Assistant */}
        <div className="bg-slate-900/80 rounded-xl border border-green-500/30 p-6 relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-green-500/20 pb-2">
            <h3 className="text-xs font-bold text-green-400 uppercase tracking-widest">AI Officer</h3>
          </div>
          
          <div className="flex-1 text-sm font-mono text-green-100/90 leading-relaxed min-h-[200px]">
            {!showHint ? (
              <button onClick={() => setShowHint(true)} className="w-full h-full flex items-center justify-center border border-dashed border-green-500/30 rounded hover:bg-green-900/20 transition-all">
                <span className="text-green-400 animate-pulse">⚡ ANALYZE OBJECTIVE</span>
              </button>
            ) : (
              <TypeAnimation
                style={{ whiteSpace: 'pre-line' }}
                sequence={[
                  "Analyzing...\n\nAvoid vague goals like 'Students learn better.'\n\nBe specific: 'Students score 70% in Math.'\n\nThink: Can you take a photo of this change?",
                ]}
                speed={75}
              />
            )}
          </div>
        </div>
      </div>

      {/* NAV */}
      <div className="flex justify-between pt-8 border-t border-white/5 mt-8">
        <button onClick={back} className="text-slate-500 hover:text-white font-bold tracking-widest uppercase">← ABORT</button>
        <button
          onClick={next}
          disabled={!data.goal}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            data.goal ? "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-slate-800 text-slate-500 cursor-not-allowed"
          }`}
        >
          LOCK TARGET →
        </button>
      </div>
    </div>
  );
};

export default Level2_Goal;