// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR0iqEX_8mzsFaFMyWZm162a8ETpBQJXk",
  authDomain: "clicko-18bd5.firebaseapp.com",
  projectId: "clicko-18bd5",
  storageBucket: "clicko-18bd5.appspot.com",
  messagingSenderId: "986909333762",
  appId: "1:986909333762:web:aa8c0f300fdc9129b00a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);