import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Wizard from "./components/Wizard/Wizard";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import the new page
import DashboardHeader from "./components/DashboardHeader";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function AppContent() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for login state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="bg-slate-950 h-screen flex items-center justify-center text-cyan-500 font-mono">LOADING SYSTEM...</div>;

  return (
    <Routes>
      
      {/* 1. LANDING PAGE (First Screen) */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. LOGIN PAGE */}
      {/* If user is already logged in, send them to Dashboard immediately */}
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" /> : <Login />} 
      />

      {/* 3. DASHBOARD (The Wizard) - Protected Route */}
      <Route 
        path="/dashboard" 
        element={
          user ? (
            // Dashboard Layout with Header on all pages
            <div className="bg-black min-h-screen font-sans selection:bg-cyan-500/30 flex flex-col relative overflow-hidden">
              
              {/* BACKGROUND GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
              
              {/* Dashboard Header - Appears on all phases */}
              <DashboardHeader userEmail={user.email} />
              
              {/* Wizard Container - Centered */}
              <div className="flex-1 flex items-center justify-center p-4 py-8 md:p-8 relative z-10">
                <div className="w-full max-w-6xl">
                  <Wizard userId={user.uid} /> 
                </div>
              </div>

            </div>
          ) : (
            // If not logged in, kick them back to Login
            <Navigate to="/login" />
          )
        } 
      />

    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;