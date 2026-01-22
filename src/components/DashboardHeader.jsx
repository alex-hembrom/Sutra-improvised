import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between border-b border-cyan-500/20 bg-black/30 backdrop-blur-md">
      
      {/* LOGO */}
      <div 
        onClick={() => navigate("/")}
        className="text-lg sm:text-xl md:text-2xl font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] cursor-pointer hover:animate-glitch flex-shrink-0" 
        data-text="SUTRA"
      >
        SUTRA
      </div>
      
      {/* MOBILE MENU BUTTON */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col gap-1 z-50"
      >
        <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>
      
      {/* NAVIGATION LINKS - DESKTOP */}
      <div className="hidden md:flex gap-4 lg:gap-8 text-xs sm:text-sm md:text-base font-mono tracking-wider md:tracking-widest text-slate-400 flex-1 justify-center">
        <button 
          onClick={() => navigate("/")} 
          className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase whitespace-nowrap"
        >
          <span className="relative z-10">Dashboard</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        {/* UPDATED LINKS HERE */}
        <button onClick={() => scrollToSection("problem-statement")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase whitespace-nowrap">
          <span className="relative z-10">Problem</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        <button onClick={() => scrollToSection("solution")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase whitespace-nowrap">
          <span className="relative z-10">Solution</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>

        <button onClick={() => scrollToSection("systems")} className="relative group overflow-hidden px-2 hover:text-cyan-400 transition-colors uppercase whitespace-nowrap">
          <span className="relative z-10">Systems</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>

      {/* LOGIN BUTTON - DESKTOP */}
      <div className="hidden md:flex gap-4">
        {user ? (
          <button 
            onClick={handleLogout} 
            className="relative px-4 md:px-6 py-2 bg-transparent overflow-hidden text-cyan-400 text-xs md:text-sm font-mono border border-cyan-500/30 group hover:bg-cyan-500/10 transition-all clip-corner-btn hover:text-red-400 hover:border-red-500/50"
          >
            <span className="absolute inset-0 w-full h-full bg-red-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></span>
            <span className="relative whitespace-nowrap">LOGOUT</span>
          </button>
        ) : (
          <button 
            onClick={() => navigate("/login")} 
            className="relative px-4 md:px-6 py-2 bg-transparent overflow-hidden text-cyan-400 text-xs md:text-sm font-mono border border-cyan-500/30 group hover:bg-cyan-500/10 transition-all clip-corner-btn"
          >
            <span className="absolute inset-0 w-full h-full bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></span>
            <span className="relative whitespace-nowrap">LOGIN</span>
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-black/80 backdrop-blur-md border-b border-cyan-500/20 flex flex-col gap-4 p-6 mt-2">
          <button 
            onClick={() => { navigate("/"); setMobileMenuOpen(false); }} 
            className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-mono text-sm"
          >
            Dashboard
          </button>
          <button onClick={() => scrollToSection("problem-statement")} className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-mono text-sm">
            Problem
          </button>
          <button onClick={() => scrollToSection("solution")} className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-mono text-sm">
            Solution
          </button>
          <button onClick={() => scrollToSection("systems")} className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-mono text-sm">
            Systems
          </button>
          <hr className="border-cyan-500/20 my-2" />
          {user ? (
            <button 
              onClick={handleLogout} 
              className="text-red-400 hover:text-red-300 transition-colors uppercase font-mono text-sm"
            >
              LOGOUT
            </button>
          ) : (
            <button 
              onClick={() => { navigate("/login"); setMobileMenuOpen(false); }} 
              className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-mono text-sm"
            >
              LOGIN
            </button>
          )}
        </div>
      )}

      <style>{`
        .clip-corner-btn {
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }
      `}</style>
    </nav>
  );
};

export default DashboardHeader;