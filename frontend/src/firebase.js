import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvL1A23R9XB1u0HekqGTm3TvXUZgcLAmE",
    authDomain: "kitabcycle.firebaseapp.com",
    projectId: "kitabcycle",
    storageBucket: "kitabcycle.firebasestorage.app",
    messagingSenderId: "153199270182",
    appId: "1:153199270182:web:1efdaa4f0ee8d400ed89e7",
    measurementId: "G-7C2QD7N2W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();