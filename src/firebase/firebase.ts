// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALamP1cUY-P8t0T4IYUfz9jxJCT-n__LM",
    authDomain: "amadershop-55aec.firebaseapp.com",
    projectId: "amadershop-55aec",
    storageBucket: "amadershop-55aec.appspot.com",
    messagingSenderId: "95758416914",
    appId: "1:95758416914:web:fdc82866ac49abb0ff2ccb",
    measurementId: "G-GFS26J30ML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);