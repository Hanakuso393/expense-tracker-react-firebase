// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4-FxcFpDJo6NB_2VySmYJXqxxe7dMws",
  authDomain: "expense-tracker-cf7ac.firebaseapp.com",
  projectId: "expense-tracker-cf7ac",
  storageBucket: "expense-tracker-cf7ac.appspot.com",
  messagingSenderId: "264083226638",
  appId: "1:264083226638:web:f5f66770faedd7accd3c5f",
  measurementId: "G-4PRDX5K713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);