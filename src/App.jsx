// File: src/App.jsx
import React, { useState, useEffect } from "react";
import Wizard from "./components/Wizard/Wizard";
import Login from "./components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-white text-center mt-20">Loading System...</div>;

  return (
    // FIX: 'flex flex-col' and 'justify-center' put the Wizard in the middle
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30 flex flex-col relative overflow-hidden">
      
      {user ? (
        <>
          {/* HEADER (Logout): Fixed to top */}
          <div className="absolute top-0 w-full p-6 flex justify-end items-center z-50 bg-gradient-to-b from-slate-900 to-transparent">
            <span className="text-slate-500 text-xs font-mono hidden md:inline mr-4">
              AGENT: {user.email}
            </span>
            <button 
              onClick={() => auth.signOut()}
              className="text-xs text-red-400 border border-red-500/30 px-3 py-1 rounded hover:bg-red-900/20 backdrop-blur-sm transition-all"
            >
              LOGOUT
            </button>
          </div>
          
          {/* WIZARD CONTAINER: Padded and Centered */}
          <div className="flex-1 flex items-center justify-center p-4 pt-20 md:p-8">
            <div className="w-full max-w-6xl">
              <Wizard userId={user.uid} /> 
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;