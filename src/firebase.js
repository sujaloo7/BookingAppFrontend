// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL4qyg8b92zKfVAfMWtL-cjG3ogMqg0XM",
    authDomain: "booking-app-41875.firebaseapp.com",
    projectId: "booking-app-41875",
    storageBucket: "booking-app-41875.appspot.com",
    messagingSenderId: "262344724687",
    appId: "1:262344724687:web:3b5b6e235e84cc6bc667ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);