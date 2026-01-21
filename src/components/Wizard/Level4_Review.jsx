import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Level4_Review = ({ data, back }) => {
  const [windowDimension, setWindowDimension] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    // 1. Set the document title so the PDF file is named "SUTRA_Blueprint.pdf"
    // and the browser's print header displays "SUTRA"
    document.title = "SUTRA_Blueprint";

    const detectSize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  const getStakeholderName = (id) => {
    const names = {
      teachers: 'Teachers', students: 'Students', hm: 'Headmaster',
      parents: 'Parents', district: 'District Officer', community: 'Community'
    };
    return names[id] || id;
  };

  return (
    <div className="animate-fade-in text-white relative">
      <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} numberOfPieces={500} />

      <div className="text-center mb-8 print:hidden">
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Mission Complete!</h2>
        <p className="text-gray-400">Your Program Design Blueprint is ready.</p>
      </div>

      {/* --- PRINTABLE DOCUMENT START --- */}
      <div id="printable-area" className="bg-white text-slate-900 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto mb-8 relative overflow-hidden">
        
        {/* === 1. THE SUTRA HEADER (Visible only in Print) === */}
        <div className="hidden print:flex justify-between items-end border-b-2 border-black pb-4 mb-8">
          <div>
             {/* Uses your Orbitron Font for branding */}
            <h1 className="text-4xl font-black tracking-[0.2em] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SUTRA
            </h1>
            <p className="text-xs text-gray-600 font-mono tracking-widest mt-1">LOGIC FRAMEWORK ENGINE</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-500">GENERATED REPORT</p>
            <p className="text-sm font-mono">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Stamp */}
        <div className="absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white text-xs font-bold px-10 py-1 shadow-lg opacity-80 print:opacity-100 print:hidden">
          DRAFT LFA
        </div>

        {/* === VISUAL LOGIC FLOW === */}
        <div className="mb-10 bg-slate-50 p-6 rounded-xl border border-slate-200 print:bg-white print:border-slate-300">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Visual Logic Map</h3>
          
          <div className="flex flex-col md:flex-row items-stretch gap-4 justify-between">
            {/* NODE 1: PROBLEM */}
            <div className="flex-1 bg-red-50 border border-red-200 rounded p-4 relative print:border-red-300">
              <span className="absolute -top-3 left-4 bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-bold tracking-wider print:border print:border-red-200">PROBLEM</span>
              <p className="text-sm text-slate-700 italic">"{data.problem ? data.problem.substring(0, 80) : "..."}..."</p>
            </div>
            {/* ARROW */}
            <div className="hidden md:flex items-center text-slate-300 print:text-black">→</div>
            {/* NODE 2: INTERVENTION */}
            <div className="flex-1 bg-blue-50 border border-blue-200 rounded p-4 relative flex flex-col justify-center gap-2 print:border-blue-300">
              <span className="absolute -top-3 left-4 bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-bold tracking-wider print:border print:border-blue-200">ACTIVITIES</span>
              {data.stakeholders.slice(0, 2).map(id => (
                 <div key={id} className="text-xs font-bold text-blue-800 bg-white/50 px-2 py-1 rounded">+ {getStakeholderName(id)} Action</div>
              ))}
              {data.stakeholders.length > 2 && <div className="text-[10px] text-blue-400">+ {data.stakeholders.length - 2} more</div>}
            </div>
            {/* ARROW */}
            <div className="hidden md:flex items-center text-slate-300 print:text-black">→</div>
            {/* NODE 3: GOAL */}
            <div className="flex-1 bg-green-50 border border-green-200 rounded p-4 relative print:border-green-300">
              <span className="absolute -top-3 left-4 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold tracking-wider print:border print:border-green-200">GOAL</span>
              <p className="text-sm text-slate-700 font-semibold">"{data.goal || "Goal not set"}"</p>
            </div>
          </div>
        </div>

        {/* Section 2: The Logic Matrix */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">02. Intervention Matrix</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800">
                <th className="py-2 w-1/3 text-sm font-bold">System Actor</th>
                <th className="py-2 w-2/3 text-sm font-bold">Key Activity / Intervention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {data.stakeholders.length > 0 ? (
                data.stakeholders.map((id) => (
                  <tr key={id}>
                    <td className="py-4 font-bold text-blue-800">{getStakeholderName(id)}</td>
                    <td className="py-4 text-slate-600">{data.activities[id] || <span className="italic text-gray-400">No action specified</span>}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="py-4 text-center text-gray-400 italic">No team selected.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* --- PRINTABLE DOCUMENT END --- */}

      <div className="flex justify-between items-center pt-4 border-t border-slate-700 print:hidden">
        <button onClick={back} className="text-slate-400 hover:text-white font-semibold underline">Make Changes</button>
        <button onClick={() => window.print()} className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-green-500/30 flex items-center gap-2 transition-transform hover:scale-105">
          <span>🖨️</span> Download Blueprint
        </button>
      </div>

      <style>{`
        @media print {
          /* 1. HIDE EVERYTHING ON THE PAGE */
          body * {
            visibility: hidden;
          }

          /* 2. SHOW ONLY THE PRINTABLE AREA AND ITS CHILDREN */
          #printable-area, #printable-area * {
            visibility: visible;
          }

          /* 3. POSITION THE PRINTABLE AREA AT THE TOP LEFT */
          #printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 40px; /* Add padding so header isn't cut off */
            background-color: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }

          /* 4. FORCE TEXT COLORS */
          p, h1, h2, h3, h4, span, div, td, th {
            color: #000 !important;
            text-shadow: none !important;
          }

          /* 5. FIX BORDERS FOR PAPER */
          .bg-slate-50, .bg-red-50, .bg-blue-50, .bg-green-50 {
            background-color: white !important;
            border: 1px solid #ccc !important;
          }

          /* 6. Ensure Font works */
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        }
      `}</style>
    </div>
  );
};

export default Level4_Review;