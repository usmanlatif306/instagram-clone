// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTemiLfBzEi7141Ik9-McZU3qoJhD_rz8",
  authDomain: "clone-b96bd.firebaseapp.com",
  projectId: "clone-b96bd",
  storageBucket: "clone-b96bd.appspot.com",
  messagingSenderId: "678497939366",
  appId: "1:678497939366:web:88ddb0fe5a31a0e019e967",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
