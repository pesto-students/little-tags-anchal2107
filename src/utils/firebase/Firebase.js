import React from "react";
import firebaseApp from "firebase/app";
import "firebase/database";
import "firebase/auth";
import dotenv from "dotenv";

const FirebaseContext = React.createContext(null);
dotenv.config();
// const FirebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const FirebaseConfig = {
  apiKey: "AIzaSyBxA_nuP2SUaM3R8XOxOGELlJz2gjQvP00",
  authDomain: "little-tags-developement.firebaseapp.com",
  projectId: "little-tags-developement",
  storageBucket: "little-tags-developement.appspot.com",
  messagingSenderId: "825856352798",
  appId: "1:825856352798:web:de68d35ae067f15b09c40f",
};
class FirebaseClass {
  constructor() {
    console.log(` config data ${JSON.stringify(FirebaseConfig)}`);
    firebaseApp.initializeApp(FirebaseConfig);
    this.firebaseDatabase = firebaseApp.database();
    this.authentication = firebaseApp.auth();
    this.googleAuthProvider = new firebaseApp.auth.GoogleAuthProvider();
  }
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.authentication.doCreateUserWithEmailAndPassword(email, password);
  };
  doSignInWithEmailAndPassword = (email, password) => {
    this.authentication.doSignInWithEmailAndPassword(email, password);
  };
  doGoogleSignIn = () => this.authentication.signInWithPopup(this.googleAuthProvider);

  SignOut = () => this.authentication.SignOut();

  FirebaseDBRef = (refPath) => this.firebaseDatabase.ref(refPath);

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser,
            };
            // console.log(`authUser:: listener:: ${user}`);
            next(user);
          });
      } else {
        // console.log(`Now user is not available`);
        fallback();
      }
    });
  };
  //thinking to removethis as i have FirebaseDB here
  userTable = (uid) => this.firebaseDatabase.ref(`/Users/${uid}`);
}
export { FirebaseClass, FirebaseContext,FirebaseConfig };
