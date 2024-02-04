// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8RPClybKLisRnfP2VYr-pER_sLIBB5bI",
  authDomain: "expense-tracker-nextjs-36a75.firebaseapp.com",
  projectId: "expense-tracker-nextjs-36a75",
  storageBucket: "expense-tracker-nextjs-36a75.appspot.com",
  messagingSenderId: "164099491934",
  appId: "1:164099491934:web:b4980a7d1c244380dc0ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)