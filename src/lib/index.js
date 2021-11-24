

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js';
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult
} from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, query, onSnapshot } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { look } from '../pagesShow/lookPost.js';

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
const provider = new GoogleAuthProvider(app);
console.log(app);

export const createU = (email, password) =>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("created"); 
  
    // ...
   

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    console.log(errorCode + errorMessage);

  });

};

export const whithGoogle =()=>{

signInWithPopup(auth, provider);
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    

    // ...
  });

}
 export const loginInit = (userEmail,userPassword) =>{
  signInWithEmailAndPassword(auth, userEmail,userPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = '#/postPage';

      

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('error de datos');

      window.location.hash = '#/firtpage';


      

    });
  
 }
 export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('cierre de sesión exitoso');
    window.location.hash = '#/firtpage';
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};

// Add a new document with a generated id.
export const recet = async(postData) =>{
const docRef = await addDoc(collection(db, "posts"), {
  recetas: postData,
  
});
console.log("Document written with ID: ", docRef.id);
return docRef;
};
/*const prueba =document.getElementById('lookPage');
export const readData = async() => {
const querySnapshot = await getDocs(collection(db, "posts"));
  
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
 const  twopr = `
  <textarea class="postLook" id="postLook">${doc.data().recetas}</textarea>`
  // doc.data() is never undefined for query doc snapshots
  querySnapshot.innerHTML = twopr;
});
return querySnapshot;
};*/
export const readData = () => {
  const q = query(collection(db, "posts"));
  onSnapshot(q, (querySnapshot) => {
    const postsBox = [];
    
    querySnapshot.forEach((doc) => {
        postsBox.push(doc.data());
      
    });
    look(postsBox)
    console.log("hola");
    console.log( "recetas", postsBox.join(", "));
    return postsBox;
  });

};
readData();
//escuchador
export const lookout = () =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
       const uid = user.uid;
     } else  {
       console.log('no logeado');
        window.location.hash = '#/firtpage';   
       }
  });
  };
  