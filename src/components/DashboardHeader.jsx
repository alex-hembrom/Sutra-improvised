import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const DashboardHeader = ({ userEmail }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full border-b border-cyan-500/20 bg-gradient-to-r from-slate-900/80 via-slate-900/80 to-slate-900/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-full">
        
        {/* Left - SUTRA Logo */}
        <div className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 cursor-pointer flex-shrink-0">
          SUTRA
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-12 text-sm font-mono tracking-widest text-slate-400 flex-1 justify-center mx-8">
          <button onClick={() => navigate("/")} className="hover:text-cyan-400 transition-colors uppercase">
            Dashboard
          </button>
          <button className="hover:text-cyan-400 transition-colors uppercase">About</button>
          <button className="hover:text-cyan-400 transition-colors uppercase">Blog</button>
          <button className="hover:text-cyan-400 transition-colors uppercase">Systems</button>
        </div>

        {/* Right - User Info & Logout */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-slate-400 text-xs font-mono hidden lg:inline">
            AGENT: {userEmail}
          </span>
          <button 
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
            className="text-xs text-red-400 border border-red-500/30 px-4 py-2 rounded hover:bg-red-900/20 hover:border-red-400 backdrop-blur-sm transition-all uppercase font-mono tracking-widest"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
