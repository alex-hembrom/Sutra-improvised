import React from "react";
import { loginWithGoogle } from "../firebase";

const Login = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="z-10 text-center p-12 bg-slate-900/80 border border-cyan-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] max-w-md w-full mx-4">
        
        <h2 className="text-3xl font-bold mb-2 text-white">
          IDENTIFICATION REQUIRED
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Please access the secure terminal using your credentials.
        </p>
        
        {/* Google handles both Login AND Signup automatically */}
        <button 
          onClick={loginWithGoogle}
          className="w-full py-4 bg-white text-slate-900 font-bold rounded hover:bg-cyan-50 transition-all flex items-center justify-center gap-3"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        <p className="mt-6 text-[10px] text-slate-500 font-mono uppercase">
          Access is restricted to authorized personnel only.
        </p>
      </div>
    </div>
  );
};

export default Login;