import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; 

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAuPNOVk4jV4FnmeXdeVduYWPF-kr-PAmw",
  authDomain: "attendenceapp-e0294.firebaseapp.com",
  databaseURL: "https://attendenceapp-e0294-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendenceapp-e0294",
  storageBucket: "attendenceapp-e0294.firebasestorage.app",
  messagingSenderId: "941645434708",
  appId: "1:941645434708:web:d592d6186ae60202bfc2c1",
  measurementId: "G-ZL0ZLT2XF1"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app); 
const db = getFirestore(app); 
const database = getDatabase(app);

// Export initialized services
export { app, auth, db, database };
