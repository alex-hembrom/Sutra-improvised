import React from "react";
import { auth } from "../firebase";

const DashboardHeader = ({ userEmail }) => {
  return (
    <div className="w-full p-4 md:p-6 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-white/5 relative z-50">
      
      {/* LEFT: System Identity */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
        <div className="text-xs md:text-sm font-mono text-slate-400">
          <span className="text-cyan-400 font-bold">OPERATOR:</span> {userEmail}
        </div>
      </div>

      {/* RIGHT: Logout Button */}
      <button 
        onClick={() => auth.signOut()}
        className="text-xs font-mono text-red-400 border border-red-500/30 px-4 py-2 rounded hover:bg-red-900/20 hover:border-red-500 transition-all uppercase tracking-widest"
      >
        [ Terminate Session ]
      </button>
    </div>
  );
};

export default DashboardHeader;