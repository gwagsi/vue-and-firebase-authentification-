// import * as firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_API_KEY,
//   authDomain: process.env.VUE_APP_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_DATABASE_URL,
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_APP_ID,
//   measurementId: process.env.VUE_APP_MEASUREMENT_ID,
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
