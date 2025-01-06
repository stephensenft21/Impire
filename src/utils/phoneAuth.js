import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

let confirmationResult;

export const setupRecaptcha = () => {
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: () => {
        console.log("Recaptcha Verified");
      },
    },
    auth
  );
};

export const signInWithPhone = async (phoneNumber) => {
  const auth = getAuth();
  const appVerifier = window.recaptchaVerifier;
  confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  return confirmationResult;
};

export const confirmCode = async (code) => {
  if (!confirmationResult) throw new Error("No confirmation result found");
  return await confirmationResult.confirm(code);
};
