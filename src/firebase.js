// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXVhSVoEO5dOfL8rKaRK7IC7TYD4K6qzQ",
  authDomain: "react-project-01-8da4e.firebaseapp.com",
  projectId: "react-project-01-8da4e",
  storageBucket: "react-project-01-8da4e.appspot.com",
  messagingSenderId: "259363152311",
  appId: "1:259363152311:web:6226c0fe2dd35aa59bc832",
  measurementId: "G-LRLPT37782"
};
initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();