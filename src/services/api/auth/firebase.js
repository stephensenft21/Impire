import { initializeApp, setLogLevel } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
} from "firebase/auth";

setLogLevel("debug");

// Your Firebase config
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

// Initialize Auth
const auth = getAuth(app);

// Only disable app verification for testing in local environments (during development)
if (window.location.hostname === "localhost") {
  if (auth.settings) {
    auth.settings.appVerificationDisabledForTesting = true;
  } else {
    console.error("auth.settings is undefined");
  }
}

const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "normal",
      callback: (response) => {
        console.log("reCAPTCHA solved:", response);
      },
      "expired-callback": () => {
        console.error("reCAPTCHA expired. Please try again.");
      },
    },
    auth
  );

  window.recaptchaVerifier.render().then((widgetId) => {
    console.log("reCAPTCHA Widget ID:", widgetId);
  });
};

// Function to sign in with phone number
const signInWithPhone = (phoneNumber) => {
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Store confirmationResult to use later for verifying the code.
      window.confirmationResult = confirmationResult;
      console.log("SMS sent successfully.");
    })
    .catch((error) => {
      console.error("Error during signInWithPhoneNumber:", error.message);
    });
};

// Function to confirm verification code
const confirmCode = (code) => {
  const confirmationResult = window.confirmationResult;
  if (!confirmationResult) {
    console.error("No confirmation result available.");
    return;
  }

  confirmationResult
    .confirm(code)
    .then((result) => {
      console.log("User signed in successfully:", result.user);
    })
    .catch((error) => {
      console.error("Error during code confirmation:", error.message);
    });
};

// Google Sign-In
const googleProvider = new GoogleAuthProvider();

export {setupRecaptcha, signInWithPhone, confirmCode, googleProvider,auth };
