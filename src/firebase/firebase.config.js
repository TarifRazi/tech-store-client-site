// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAyqHP23Xcr0FKYATNlT8N4CUYeP0183k",
    authDomain: "tech-store-e85a5.firebaseapp.com",
    projectId: "tech-store-e85a5",
    storageBucket: "tech-store-e85a5.appspot.com",
    messagingSenderId: "366454611834",
    appId: "1:366454611834:web:9a85d84627e683a13bc0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;