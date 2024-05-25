// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHVC2e5e7ZY1mldk2Bg2F5NozwwR6SxOg",
  authDomain: "my-meal-planner-app.firebaseapp.com",
  projectId: "my-meal-planner-app",
  storageBucket: "my-meal-planner-app.appspot.com",
  messagingSenderId: "999327805828",
  appId: "1:999327805828:web:49cc32ac0ba6f5ed81add1",
  measurementId: "G-FM0YQ9BH19",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
