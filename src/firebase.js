// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// REPLACE THIS WITH YOUR REAL KEYS FROM FIREBASE CONSOLE LATER
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