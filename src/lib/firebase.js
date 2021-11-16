// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js';
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCW9utz5XwMP2F-saHUmSMsrdVSF1qqr8Y',
  authDomain: 'easy-veggie-scl018.firebaseapp.com',
  projectId: 'easy-veggie-scl018',
  storageBucket: 'easy-veggie-scl018.appspot.com',
  messagingSenderId: '234251366022',
  appId: '1:234251366022:web:cebeae12c0db5909d1ab07',
  measurementId: 'G-T79T941S2M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log(app);
const provider = new GoogleAuthProvider(app);


export const signUp = (signUpEmail, signUpPassword) => {
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("created");
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode + errorMessage);
      });
}
