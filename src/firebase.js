// File: src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, // <--- 1. Added this import
  signOut 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Sc414opnaQ6ohBCdLh_VMkDsIn8T6p4",
  authDomain: "sutra-app-b8f1e.firebaseapp.com",
  projectId: "sutra-app-b8f1e",
  storageBucket: "sutra-app-b8f1e.firebasestorage.app",
  messagingSenderId: "239699287733",
  appId: "1:239699287733:web:2fc3dd1a40e82e671ee8fc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// --- 2. EXPORT THESE FUNCTIONS SO LOGIN.JSX CAN USE THEM ---
export { signInWithPopup, signInWithEmailAndPassword, signOut };

// Helper function (Optional, kept for safety)
export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Login failed", error);
  }
};

export const logout = () => signOut(auth);