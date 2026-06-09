// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSBR4UY-52Rd6X8vUA2QD3JsbRx6Xsxqw",
  authDomain: "mobile-programming-application.firebaseapp.com",
  projectId: "mobile-programming-application",
  storageBucket: "mobile-programming-application.firebasestorage.app",
  messagingSenderId: "703328599464",
  appId: "1:703328599464:web:f15f3044878bcccad1f19d",
  measurementId: "G-7HEX6J82MW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db);
