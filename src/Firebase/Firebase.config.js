// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6nxlaCIxHRFdB1vT9MID-9InyLTRPhk",
  authDomain: "my-hotel-b17f4.firebaseapp.com",
  projectId: "my-hotel-b17f4",
  storageBucket: "my-hotel-b17f4.appspot.com",
  messagingSenderId: "1187152098",
  appId: "1:1187152098:web:46aaaf52f8c966e1f25ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app