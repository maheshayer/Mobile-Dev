// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
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

//Function to write user data to Firebase Realtime Database
function writeUserData(userId, firstname, lastname) {
  // Get the database instance
  // const db = getDatabase();

  // Create a reference/points to 'users/{userId}' and set the data (name and email)
  set(ref(db, "users/" + userId), {
    firstname: firstname,
    lastname: lastname,
  });
}
writeUserData(1, "Mahesh", "Ayer");
writeUserData(2, "A", "Ayer");
writeUserData(3, "B", "Ayer");
writeUserData(4, "C", "Ayer");
writeUserData(5, "D", "Ayer");
writeUserData(6, "E", "Ayer");
writeUserData(7, "F", "Ayer");
writeUserData(8, "G", "Ayer");
writeUserData(9, "H", "Ayer");
writeUserData(10, "K", "Ayer");

// ref(db, 'users') points to the users path.
// get(userRef) gets the data at that path.
// snapshot.forEach(...) loops over each child node (each user).
// childsnapshot.val() gives the actual data (name and email), which is printed.
// function readUser() {
//   const userRef = ref(db, "users");

//   get(userRef).then((snapshot) => {
//     snapshot.forEach((childsnapshot) => {
//       console.log(childsnapshot.val());
//     });
//   });
// }
// readUser();

// function updateUserData(userId, updatedData) {
//   const userRef = ref(db, "users/" + userId);
//   update(userRef, updatedData)
//     .then(() => {
//       console.log("User updated successfully");
//     })
//     .catch((error) => {
//       console.error("Error updating user:", error);
//     });
// }
// // Example usage:
// updateUserData(2, { firstname: "Mesh", lastname: "Ayer" });

// function deleteUserData(userId) {
//   const userRef = ref(db, "users/" + userId);
//   remove(userRef)
//     .then(() => {
//       console.log("User deleted successfully");
//     })
//     .catch((error) => {
//       console.error("Error deleting user:", error);
//     });
// }

// // // // // // // // // Example usage:
// deleteUserData(1);

// console.log("Added! Good");
