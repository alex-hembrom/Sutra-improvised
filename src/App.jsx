import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LandingPage from './components/LandingPage';
import DashboardHeader from './components/DashboardHeader';
import Login from './components/Login';
import Wizard from './components/Wizard/Wizard';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ user, loading, children }) => {
  if (loading) {
    return <div className="min-h-screen bg-[#050510] flex items-center justify-center text-cyan-400">INITIALIZING...</div>;
  }
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="App bg-[#050510] min-h-screen text-white pt-24">
        {/* Header is here, so it appears on ALL pages */}
        <DashboardHeader />
        
        <Routes>
          {/* Landing page (no auth required) */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Login page (no auth required) */}
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard redirect */}
          <Route path="/dashboard" element={<LandingPage />} />
          
          {/* Wizard - PROTECTED (Phase 01) */}
          <Route 
            path="/wizard" 
            element={
              <ProtectedRoute user={user} loading={loading}>
                <Wizard userId={user?.uid} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;