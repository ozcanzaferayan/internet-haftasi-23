// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklPYWZN1IKCgDuOL9zrjTx76lCHJq8RM",
  authDomain: "my-first-project-ead7f.firebaseapp.com",
  projectId: "my-first-project-ead7f",
  storageBucket: "my-first-project-ead7f.appspot.com",
  messagingSenderId: "115504442918",
  appId: "1:115504442918:web:75151b72b8474df76240e7",
  measurementId: "G-4J8L0NEZYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
};
