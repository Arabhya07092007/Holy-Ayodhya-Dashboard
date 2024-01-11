// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeVlNjdPlsnMGwAycX5gGWSaKt2YEkiz0",
    authDomain: "backendintegration-2fdc3.firebaseapp.com",
    databaseURL: "https://backendintegration-2fdc3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "backendintegration-2fdc3",
    storageBucket: "backendintegration-2fdc3.appspot.com",
    messagingSenderId: "910813817712",
    appId: "1:910813817712:web:1665195d15f821dccb3db5",
    measurementId: "G-7RMH1QNXTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export default database;