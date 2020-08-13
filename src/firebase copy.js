// import * as firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAsXO_H0J1PhW2OyNE0tWb1JeCQZuT0o-Q",
//   authDomain: "learning-pack.firebaseapp.com",
//   databaseURL: "https://learning-pack.firebaseio.com",
//   projectId: "learning-pack",
//   storageBucket: "learning-pack.appspot.com",
//   messagingSenderId: "1080629456478",
//   appId: "1:1080629456478:web:5ac6040aac2834efdbcecf",
//   measurementId: "G-EN2PDBFNEB",
// };

// firebase.initializeApp(firebaseConfig);
// export default {
//   auth: firebase.auth(),
//   signup() {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(
//         this.signupForm.email,
//         this.loginForm.password
//       )
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//   },
//   facebookAuth() {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(function(result) {
//         console.log(result);
//       })
//       .catch(function(error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = error.credential;
//         console.log(errorCode, errorMessage, email, credential);
//       });
//   },
//   twitterAuth() {
//     const provider = new firebase.auth.TwitterAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(function(result) {
//         console.log(result);
//       })
//       .catch(function(error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = error.credential;
//         console.log(errorCode, errorMessage, email, credential);
//       });
//   },
//   login() {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((data) => {
//         this.$router.replace({ name: "profile" });
//       })
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//   },
//   logout() {
//     firebase
//       .auth()
//       .signOut()
//       .then(function() {})
//       .then(() => {
//         this.$router.replace({
//           name: "login",
//         });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   },
// };
