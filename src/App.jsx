import React, { useState, useEffect } from "react";
import Wizard from "./components/Wizard/Wizard";
import Login from "./components/Login"; // (We created this in previous response)
import { auth } from "./firebase"; // Import the auth tool
import { onAuthStateChanged } from "firebase/auth"; // Listens for login status

function App() {
  const [user, setUser] = useState(null); // Who is logged in?
  const [loading, setLoading] = useState(true); // Is it checking?

  useEffect(() => {
    // This listener runs whenever the user logs in or out
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-white text-center mt-20">Loading System...</div>;

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30">
      {/* If user exists, show Wizard. If not, show Login. */}
      {user ? (
        <>
          {/* Top Bar with Logout Button */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
            <span className="text-slate-500 text-xs font-mono hidden md:inline">
              AGENT: {user.email}
            </span>
            <button 
              onClick={() => auth.signOut()}
              className="text-xs text-red-400 border border-red-500/30 px-3 py-1 rounded hover:bg-red-900/20"
            >
              LOGOUT
            </button>
          </div>
          
          {/* Pass user ID to Wizard so we know whose data to save */}
          <Wizard userId={user.uid} /> 
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;