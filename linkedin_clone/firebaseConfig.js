import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyAw4UNsuzb801eqkYu6RNJKblovQ0aNKlM",
  authDomain: "linkedin78-a3f73.firebaseapp.com",
  projectId: "linkedin78-a3f73",
  databaseURL:'linkedin78-a3f73.firebaseio.com',
  storageBucket: "linkedin78-a3f73.appspot.com",
  messagingSenderId: "1082027457974",
  appId: "1:1082027457974:web:a3045e2b48f42bb0951517"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



