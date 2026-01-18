import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Wizard from "./components/Wizard/Wizard";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import the new page
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
            // This Layout ensures the Wizard is centered and Logout is at the top
            <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30 flex flex-col relative overflow-hidden">
              
              {/* Logout Header */}
              <div className="absolute top-0 w-full p-6 flex justify-end items-center z-50 bg-gradient-to-b from-slate-900 to-transparent">
                <span className="text-slate-500 text-xs font-mono hidden md:inline mr-4">
                  AGENT: {user.email}
                </span>
                <button 
                  onClick={() => {
                    auth.signOut();
                    navigate("/");
                  }}
                  className="text-xs text-red-400 border border-red-500/30 px-3 py-1 rounded hover:bg-red-900/20 backdrop-blur-sm transition-all"
                >
                  LOGOUT
                </button>
              </div>
              
              {/* Wizard Container - Centered */}
              <div className="flex-1 flex items-center justify-center p-4 pt-20 md:p-8">
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