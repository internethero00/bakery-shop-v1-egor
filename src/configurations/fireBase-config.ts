// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs831_9SJCo3vp8xVL2pmmGTw0Fd8tQzE",
    authDomain: "bakery-shop-6615a.firebaseapp.com",
    projectId: "bakery-shop-6615a",
    storageBucket: "bakery-shop-6615a.firebasestorage.app",
    messagingSenderId: "460975702750",
    appId: "1:460975702750:web:1acd20dac9ddbbcc33784f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);