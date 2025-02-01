import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; 

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDyF-ScyV0oCxsUKEMkP1zz8Mvtahu2HRI",
  authDomain: "attendenceapp-90319.firebaseapp.com",
  databaseURL: "https://attendenceapp-90319-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "attendenceapp-90319",
  storageBucket: "attendenceapp-90319.appspot.com",
  messagingSenderId: "248030669461",
  appId: "1:248030669461:web:585f77b9da5cb1fd05899c",
  measurementId: "G-9322E9XM2X",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app); 
const db = getFirestore(app); 
const database = getDatabase(app);

// Export initialized services
export { app, auth, db, database };
