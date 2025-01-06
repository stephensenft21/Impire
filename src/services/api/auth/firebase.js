import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setLogLevel } from "firebase/app";
setLogLevel("debug");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYYPxLrF0vfZPcuh1b0Z5vJD215qBOyhs",
  authDomain: "impire-be700.firebaseapp.com",
  projectId: "impire-be700",
  storageBucket: "impire-be700.firebasestorage.app",
  messagingSenderId: "389953013645",
  appId: "1:389953013645:web:059caa25621e0348c75fc4",
  measurementId: "G-MBNGGKLDVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };