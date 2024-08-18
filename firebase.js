// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC-R-KBWX8ZeWQdfBMsIkYyCUb_TrxGTc",
  authDomain: "flashcardsaas-f3cc8.firebaseapp.com",
  projectId: "flashcardsaas-f3cc8",
  storageBucket: "flashcardsaas-f3cc8.appspot.com",
  messagingSenderId: "617223410494",
  appId: "1:617223410494:web:cd285458c0b4c7b50a126f",
  measurementId: "G-WY9QJLTSLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}