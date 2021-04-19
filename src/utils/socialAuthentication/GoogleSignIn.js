import dotenv from "dotenv";
//import {FirebaseClass} from '../firebase/Firebase'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

dotenv.config();

firebase.initializeApp({
  apiKey: "AIzaSyBxA_nuP2SUaM3R8XOxOGELlJz2gjQvP00",
  authDomain: "little-tags-developement.firebaseapp.com",
  projectId: "little-tags-developement",
  storageBucket: "little-tags-developement.appspot.com",
  messagingSenderId: "825856352798",
  appId: "1:825856352798:web:de68d35ae067f15b09c40f",
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const handleGoogleSignIn = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// export  const handleGoogleSignIn = () => {
//   FirebaseClass
//     .doGoogleSignIn()
//     .then((authUser) => {
//       // console.log({ email: authUser.email, username: authUser.displayName });
//       // console.log(authUser);
//       return FirebaseClass.user(authUser.user.uid).set({
//         email: authUser.user.email,
//         username: authUser.user.displayName,
//         roles: {},
//       });
//     })
//     .then(() => {
//     //  props.history.push(ROUTES.HOME);
//     })
//     .catch((error) => {
//     //  setErrorMessage(error.message);
//     });
// };
