import React from "react";

const Level5_Indicators = ({ data, update, next, back }) => {
  
  const indicatorOptions = [
    { id: "test_scores", label: "Standardized Test Scores", icon: "📊" },
    { id: "attendance", label: "Student Attendance Logs", icon: "📅" },
    { id: "observation", label: "Classroom Observation", icon: "👀" },
    { id: "surveys", label: "Parent/Teacher Surveys", icon: "📝" },
    { id: "gov_data", label: "Government Data (UDISE)", icon: "🏛️" }
  ];

  const toggleIndicator = (id) => {
    const current = data.indicators || [];
    if (current.includes(id)) {
      update("indicators", current.filter((i) => i !== id));
    } else {
      update("indicators", [...current, id]);
    }
  };

  return (
    <div className="animate-fade-in text-white h-full flex flex-col">
      <div className="mb-6 border-b border-white/10 pb-4">
        <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
          DEPLOY SENSORS
        </h2>
        <p className="text-gray-400 text-sm">How will we track the success of this mission?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {indicatorOptions.map((opt) => {
          const isSelected = (data.indicators || []).includes(opt.id);
          return (
            <div
              key={opt.id}
              onClick={() => toggleIndicator(opt.id)}
              className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 ${
                isSelected 
                  ? "bg-yellow-900/40 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]" 
                  : "bg-slate-900/50 border-slate-700 hover:bg-slate-800"
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span className={`font-mono font-bold ${isSelected ? "text-yellow-400" : "text-slate-400"}`}>
                {opt.label}
              </span>
              {isSelected && <div className="ml-auto w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between pt-6 border-t border-white/5 mt-auto">
        <button onClick={back} className="text-slate-500 hover:text-white font-bold tracking-widest uppercase">← Back</button>
        <button 
          onClick={next}
          className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-2 rounded font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all"
        >
          COMPILE DATA →
        </button>
      </div>
    </div>
  );
};

export default Level5_Indicators;