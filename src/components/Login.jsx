import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, loginWithGoogle } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Error toast state
  const [error, setError] = useState(null);

  // Redirect when authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/wizard", { replace: true });
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Auth Error:", error);
      // Show friendly, non-technical messages
      let msg =
        "Authentication failed. Please verify your credentials and try again.";
      // Map common credential errors to a single message
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-email"
      ) {
        msg = "Password or user ID is incorrect. Please check and try again.";
      } else if (error.code === "auth/email-already-in-use") {
        msg =
          "An account with this email already exists. Please log in instead.";
      } else if (error.code === "auth/weak-password") {
        msg =
          "Password is too weak — please choose a stronger password (6+ characters).";
      }
      // Show in-page toast
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSelect = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Google Login Error:", error);
      setError(
        "Sign-in with Google failed. Please try again or use email/password.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center relative overflow-hidden font-sans text-white pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-scroll"></div>

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      {/* Card container */}
      <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            ACCESS PROTOCOL
          </h2>
          <p className="text-xs font-mono text-cyan-500/70 tracking-[0.3em]">
            /// {isLogin ? "IDENTITY VERIFICATION" : "NEW AGENT REGISTRATION"}{" "}
            ///
          </p>
        </div>

        {/* Login / Create toggle */}
        <div className="flex bg-slate-950/50 p-1 rounded-lg mb-6 border border-slate-700">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-xs font-mono font-bold tracking-wider rounded transition-all ${isLogin ? "bg-cyan-900/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "text-slate-500 hover:text-slate-300"}`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-xs font-mono font-bold tracking-wider rounded transition-all ${!isLogin ? "bg-purple-900/50 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)]" : "text-slate-500 hover:text-slate-300"}`}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-6">
          <div className="group/input relative">
            <label className="block text-xs font-mono text-cyan-400 mb-2 ml-1">
              USER_ID
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-slate-700 text-cyan-100 px-4 py-3 rounded focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-mono placeholder-slate-600"
              placeholder="ENTER EMAIL..."
            />
          </div>

          <div className="group/input relative">
            <label className="block text-xs font-mono text-purple-400 mb-2 ml-1">
              PASSKEY
            </label>
            <div className="relative">
              <input
                // input type toggles between text/password
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-slate-700 text-purple-100 px-4 py-3 rounded focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all font-mono placeholder-slate-600 pr-10"
                placeholder="••••••••"
              />
              {/* Eye toggle button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-purple-400 transition-colors"
              >
                {showPassword ? (
                  // Eye (hide)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  // Eye (show)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full relative overflow-hidden group/btn py-4 border transition-all duration-300 mt-2 
              ${
                isLogin
                  ? "bg-cyan-950/30 border-cyan-500/50 hover:border-cyan-400"
                  : "bg-purple-950/30 border-purple-500/50 hover:border-purple-400"
              }`}
          >
            <div
              className={`absolute inset-0 transform origin-left transition-transform duration-500 
              ${isLogin ? "bg-cyan-500/20" : "bg-purple-500/20"} 
              ${loading ? "scale-x-100" : "scale-x-0 group-hover/btn:scale-x-100"}`}
            ></div>
            <span
              className={`relative z-10 font-display font-bold tracking-[0.2em] group-hover/btn:text-white
              ${isLogin ? "text-cyan-100" : "text-purple-100"}`}
            >
              {loading
                ? "PROCESSING..."
                : isLogin
                  ? "INITIATE LINK"
                  : "REGISTER AGENT"}
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-slate-500 text-xs font-mono">
            OR AUTHORIZE WITH
          </span>
          <div className="flex-grow border-t border-slate-700"></div>
        </div>

        {/* Google button */}
        <button
          onClick={handleGoogleSelect}
          type="button"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black font-bold font-sans rounded hover:bg-slate-200 transition-all duration-300 border border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.16-7.27c1.61 0 3.22.59 4.48 1.8l2.02-2.09C16.96 2.8 14.68 2 12.16 2C6.6 2 2 6.5 2 12s4.6 10 10.16 10c7.1 0 10.12-5.75 9.19-10.9z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>
      {/* Inline error toast */}
      {error && (
        <div className="fixed top-28 right-6 z-50 w-96 max-w-sm">
          <div
            role="alert"
            aria-live="assertive"
            className="bg-gradient-to-r from-red-700 to-red-600 text-white p-4 rounded-lg shadow-xl flex items-start gap-3"
          >
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold">Authentication error</div>
              <div className="text-sm opacity-95 mt-1">{error}</div>
            </div>
            <div className="flex-shrink-0 ml-3">
              <button
                onClick={() => setError(null)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
