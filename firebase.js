// src/firebase.js or firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCebv79kNPU3c8au2qgME7AFklnTnjo9RE",
  authDomain: "azania-teen-coaches.firebaseapp.com",
  projectId: "azania-teen-coaches",
  storageBucket: "azania-teen-coaches.firebasestorage.app",
  messagingSenderId: "770187333219",
  appId: "1:770187333219:web:d895d4b6ff80160b257256",
  measurementId: "G-LQMRSV8NGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };