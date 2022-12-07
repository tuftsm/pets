// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjARrTDNjGuZhcN6AgFuRJrfFgDM9-dfg",
  authDomain: "fir-journal-6a145.firebaseapp.com",
  projectId: "fir-journal-6a145",
  storageBucket: "fir-journal-6a145.appspot.com",
  messagingSenderId: "679887856460",
  appId: "1:679887856460:web:3e03b112435e165c8765e9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
