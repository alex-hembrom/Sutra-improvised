import React from 'react';

const Level3_Activities = ({ data, update, next, back }) => {

  const getStakeholderInfo = (id) => {
    const map = {
      teachers: { name: 'Teachers', icon: '👨‍🏫', color: 'text-blue-400', border: 'border-blue-500' },
      students: { name: 'Students', icon: '🎓', color: 'text-green-400', border: 'border-green-500' },
      hm: { name: 'Headmaster', icon: '🏫', color: 'text-purple-400', border: 'border-purple-500' },
      parents: { name: 'Parents', icon: '👨‍👩‍👧', color: 'text-yellow-400', border: 'border-yellow-500' },
      district: { name: 'District Officer', icon: '👮', color: 'text-red-400', border: 'border-red-500' },
      community: { name: 'Community', icon: '🤝', color: 'text-orange-400', border: 'border-orange-500' }
    };
    return map[id] || { name: id, icon: '❓', color: 'text-gray-400', border: 'border-gray-500' };
  };

  const handleActivityChange = (id, value) => {
    const currentActivities = data.activities || {};
    update('activities', { ...currentActivities, [id]: value });
  };

  return (
    <div className="animate-fade-in text-white h-full flex flex-col">
      
      {/* HEADER */}
      <div className="mb-6 border-b border-white/10 pb-4">
        <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          TACTICAL STRATEGY
        </h2>
        <p className="text-gray-400 text-sm">
          Assign specific intervention protocols to each active agent.
        </p>
      </div>

      {/* THE TACTICAL GRID */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 max-h-[400px]">
        
        {data.stakeholders.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <div className="text-6xl mb-4">⚠️</div>
            <p>NO AGENTS SELECTED IN PHASE 02</p>
            <button onClick={back} className="text-cyan-400 underline mt-2">Return to Team Build</button>
          </div>
        ) : (
          data.stakeholders.map((id, index) => {
            const info = getStakeholderInfo(id);
            const value = (data.activities && data.activities[id]) || "";
            
            return (
              <div 
                key={id} 
                className="group relative flex items-stretch gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* 1. LEFT: Agent Identity Module */}
                <div className={`
                  w-24 bg-slate-900/80 border-l-4 ${info.border} rounded-r-lg flex flex-col items-center justify-center p-2 shrink-0
                  transition-all duration-300 group-hover:bg-slate-800
                `}>
                  <span className="text-3xl mb-1 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    {info.icon}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${info.color}`}>
                    {info.name}
                  </span>
                </div>

                {/* 2. CENTER: Animated Connector */}
                <div className="w-8 flex items-center justify-center">
                  <div className="h-[2px] w-full bg-slate-700 relative overflow-hidden">
                    {/* The "Data Flow" light moving across the line */}
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-cyan-500 blur-[2px] animate-[slideRight_1.5s_infinite]"></div>
                  </div>
                </div>

                {/* 3. RIGHT: Command Input Terminal */}
                <div className="flex-1 relative">
                  <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-700 rotate-45 group-focus-within:bg-cyan-500 transition-colors`}></div>
                  
                  <textarea
                    className="w-full bg-black/40 border border-slate-700 rounded-lg p-4 text-sm text-cyan-100 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-900/90 focus:outline-none transition-all resize-none font-mono leading-relaxed h-24 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                    placeholder={`> Define protocol for ${info.name}...`}
                    value={value}
                    onChange={(e) => handleActivityChange(id, e.target.value)}
                  />
                  
                  {/* Status Light */}
                  <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${value ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-red-500/50'}`}></div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between pt-6 border-t border-white/5 mt-auto">
        <button onClick={back} className="text-slate-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
          ← Reconfigure Team
        </button>

        <button 
          onClick={next}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2 rounded font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          CONFIRM STRATEGY <span className="text-lg">→</span>
        </button>
      </div>

    </div>
  );
};

export default Level3_Activities;