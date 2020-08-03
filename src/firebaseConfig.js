// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnyZ0eIkPBgBlRgyMqX2WhPMs_GRIFnUc",
    authDomain: "teacher-booking-app.firebaseapp.com",
    databaseURL: "https://teacher-booking-app.firebaseio.com",
    projectId: "teacher-booking-app",
    storageBucket: "teacher-booking-app.appspot.com",
    messagingSenderId: "464027149994",
    appId: "1:464027149994:web:764c1ae7f1281d8c6312d3",
    measurementId: "G-476SLNYTF4"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
