import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAsXO_H0J1PhW2OyNE0tWb1JeCQZuT0o-Q",
  authDomain: "learning-pack.firebaseapp.com",
  databaseURL: "https://learning-pack.firebaseio.com",
  projectId: "learning-pack",
  storageBucket: "learning-pack.appspot.com",
  messagingSenderId: "1080629456478",
  appId: "1:1080629456478:web:5ac6040aac2834efdbcecf",
  measurementId: "G-EN2PDBFNEB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
