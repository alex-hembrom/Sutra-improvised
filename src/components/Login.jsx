// File: src/components/Login.jsx
import React from "react";
import { loginWithGoogle } from "../firebase"; // We import the helper we made

const Login = () => {
  return (
    <div className="h-screen bg-slate-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="z-10 text-center p-10 bg-slate-900/80 border border-cyan-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
        <h1 className="text-5xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          SUTRA
        </h1>
        <p className="text-cyan-600 font-mono text-sm tracking-widest mb-8">SYSTEM UPDATE: READY</p>
        
        <button 
          onClick={loginWithGoogle}
          className="group relative px-8 py-3 bg-cyan-900/50 border border-cyan-500 text-cyan-400 font-bold rounded hover:bg-cyan-500/20 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            INITIATE LOGIN <span className="text-lg">→</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;