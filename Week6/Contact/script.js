// Firebase imports (your style)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

// Firebase config (your project)
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

console.log("DB Connected:", db);

// GLOBAL FUNCTION (important for onclick)
window.submitForm = function () {
  const btn = document.getElementById("btn");
  const status = document.getElementById("status");

  btn.disabled = true;
  status.innerText = "Submitting...";

  // collect data
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // print before saving
  console.log("Submitted Data:", data);

  // push to Firebase under "contacts"
  const newRef = push(ref(db, "contacts"));

  set(newRef, data)
    .then(() => {
      console.log("Data saved successfully");

      status.innerText = "Message sent successfully!";
      status.style.color = "lightgreen";

      // clear form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      console.log("Error:", error);

      status.innerText = "Failed to send message!";
      status.style.color = "red";
    })
    .finally(() => {
      btn.disabled = false;
    });
};
