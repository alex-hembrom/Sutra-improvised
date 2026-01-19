import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, loginWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/wizard", { replace: true });
      }
    });
    return unsubscribe;
  }, [navigate]);
  
  // New state for the Google Mock Modal
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement real Firebase email/password login
    // For now, simulating login delay
    setTimeout(() => {
      setLoading(false);
      navigate("/wizard"); 
    }, 1500);
  };

  const handleGoogleSelect = async (selectedEmail) => {
    setShowGoogleModal(false);
    setLoading(true);
    
    try {
      await loginWithGoogle();
      // Navigation happens automatically via useEffect when auth state changes
    } catch (error) {
      console.error("Google login failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center relative overflow-hidden font-sans text-white pt-24">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-scroll"></div>

      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      {/* LOGIN CONTAINER - "SECURITY TERMINAL" STYLE */}
      <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        
        {/* CORNER ACCENTS */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            ACCESS PROTOCOL
          </h2>
          <p className="text-xs font-mono text-cyan-500/70 tracking-[0.3em]">/// IDENTITY VERIFICATION REQUIRED ///</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email Input */}
          <div className="group/input relative">
            <label className="block text-xs font-mono text-cyan-400 mb-2 ml-1">USER_ID</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-slate-700 text-cyan-100 px-4 py-3 rounded focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-mono placeholder-slate-600"
              placeholder="ENTER CREDENTIALS..."
            />
          </div>

          {/* Password Input */}
          <div className="group/input relative">
            <label className="block text-xs font-mono text-purple-400 mb-2 ml-1">PASSKEY</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-slate-700 text-purple-100 px-4 py-3 rounded focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all font-mono placeholder-slate-600"
              placeholder="••••••••"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full relative overflow-hidden group/btn py-4 bg-cyan-950/30 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 mt-2"
          >
            <div className={`absolute inset-0 bg-cyan-500/20 transform origin-left transition-transform duration-500 ${loading ? 'scale-x-100' : 'scale-x-0 group-hover/btn:scale-x-100'}`}></div>
            <span className="relative z-10 font-display font-bold tracking-[0.2em] text-cyan-100 group-hover/btn:text-white">
              {loading ? "AUTHENTICATING..." : "INITIATE LINK"}
            </span>
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-slate-500 text-xs font-mono">OR AUTHORIZE WITH</span>
          <div className="flex-grow border-t border-slate-700"></div>
        </div>

        {/* GOOGLE BUTTON (Triggers Mock Modal) */}
        <button 
          onClick={() => setShowGoogleModal(true)}
          type="button"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black font-bold font-sans rounded hover:bg-slate-200 transition-all duration-300 border border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
           <svg className="w-5 h-5" viewBox="0 0 24 24">
             <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.16-7.27c1.61 0 3.22.59 4.48 1.8l2.02-2.09C16.96 2.8 14.68 2 12.16 2C6.6 2 2 6.5 2 12s4.6 10 10.16 10c7.1 0 10.12-5.75 9.19-10.9z"/>
           </svg>
           <span>Continue with Google</span>
        </button>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-slate-500">
            SECURE CONNECTION ESTABLISHED • ENCRYPTION: AES-256
          </p>
        </div>
      </div>

      {/* === GOOGLE ACCOUNT SELECTOR MODAL (Simulated) === */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-[#1a1a2e] border border-slate-600 rounded-lg shadow-2xl overflow-hidden transform transition-all scale-100">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
              <span className="text-white font-sans font-medium">Choose an account</span>
              <button onClick={() => setShowGoogleModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            
            {/* Account List */}
            <div className="p-2">
              <div 
                onClick={() => handleGoogleSelect("alex.hembrom@sutra.ai")}
                className="flex items-center gap-4 p-4 hover:bg-slate-800 cursor-pointer rounded-md transition-colors border-b border-slate-800/50"
              >
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">A</div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Alex Hembrom</span>
                  <span className="text-xs text-slate-400">alex.hembrom@sutra.ai</span>
                </div>
              </div>

              <div 
                onClick={() => handleGoogleSelect("guest.user@gmail.com")}
                className="flex items-center gap-4 p-4 hover:bg-slate-800 cursor-pointer rounded-md transition-colors"
              >
                 <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-lg">G</div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Guest User</span>
                  <span className="text-xs text-slate-400">guest.user@gmail.com</span>
                </div>
              </div>
              
              <div 
                 className="flex items-center gap-4 p-4 hover:bg-slate-800 cursor-pointer rounded-md transition-colors border-t border-slate-700 mt-1"
              >
                <div className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Use another account</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-700 bg-slate-900/50 text-center">
              <p className="text-[10px] text-slate-500">
                To continue, Google will share your name, email address, and language preference with Sutra.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Login;