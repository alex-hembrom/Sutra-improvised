import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Helper to scroll to sections if on landing page
  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full p-6 flex items-center justify-between border-b border-cyan-500/10 bg-slate-900/40 backdrop-blur-sm">
      
      {/* LOGO */}
      <div 
        onClick={() => navigate("/")}
        className="text-2xl font-display font-bold tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] cursor-pointer hover:animate-glitch" 
        data-text="SUTRA"
      >
        SUTRA
      </div>
      
      {/* NAVIGATION LINKS */}
      <div className="hidden md:flex gap-8 text-sm md:text-base font-mono tracking-widest text-slate-400">
        <button 
          onClick={() => navigate("/")} 
          className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase"
        >
          <span className="relative z-10">Dashboard</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        {/* UPDATED LINKS HERE */}
        <button onClick={() => scrollToSection("problem-statement")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase">
          <span className="relative z-10">Problem Statement</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        <button onClick={() => scrollToSection("solution")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase">
          <span className="relative z-10">Solution</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        <button onClick={() => scrollToSection("systems")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase">
          <span className="relative z-10">Systems</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>

      {/* LOGIN BUTTON */}
      <div className="hidden md:flex gap-4">
        {user ? (
          <button 
            onClick={handleLogout} 
            className="relative px-6 py-2 bg-transparent overflow-hidden text-cyan-400 font-mono border border-cyan-500/30 group hover:bg-cyan-500/10 transition-all clip-corner-btn hover:text-red-400 hover:border-red-500/50"
          >
            <span className="absolute inset-0 w-full h-full bg-red-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></span>
            <span className="relative">LOGOUT</span>
          </button>
        ) : (
          <button 
            onClick={() => navigate("/login")} 
            className="relative px-6 py-2 bg-transparent overflow-hidden text-cyan-400 font-mono border border-cyan-500/30 group hover:bg-cyan-500/10 transition-all clip-corner-btn"
          >
            <span className="absolute inset-0 w-full h-full bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></span>
            <span className="relative">LOGIN</span>
          </button>
        )}
      </div>

      <style>{`
        .clip-corner-btn {
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }
      `}</style>
    </nav>
  );
};

export default DashboardHeader;