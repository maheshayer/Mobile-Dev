import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSBR4UY-52Rd6X8vUA2QD3JsbRx6Xsxqw",
  authDomain: "mobile-programming-application.firebaseapp.com",
  projectId: "mobile-programming-application",
  storageBucket: "mobile-programming-application.firebasestorage.app",
  messagingSenderId: "703328599464",
  appId: "1:703328599464:web:f15f3044878bcccad1f19d",
  measurementId: "G-7HEX6J82MW",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getDatabase(app);
