// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-d1C7vDULgCaxdQ-WjD8PqdLrrXvPfQ",
  authDomain: "find-me-d9575.firebaseapp.com",
  projectId: "find-me-d9575",
  storageBucket: "find-me-d9575.appspot.com",
  messagingSenderId: "245006195493",
  appId: "1:245006195493:web:deaa09d8858a5b801698cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = app.firestore();
export default app;