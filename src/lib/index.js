// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js';
import {
  updateProfile,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  query, onSnapshot, orderBy, doc, deleteDoc, updateDoc, arrayRemove, arrayUnion } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { look } from '../pagesShow/lookPost.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// configuracion firebase
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
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
export const user = auth.currentUser;
console.log(app);

// registro de usuario
export const createU = (email, password,nameUser) => {
  createUserWithEmailAndPassword(auth, email, password,nameUser)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log("created");
      updateProfile(auth.currentUser,{
        displayName: nameUser,
     
      })

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("correo y contraseña invalido")
      console.log(errorCode + errorMessage);
    });
};

// registro con google
export const whithGoogle = () => {
  signInWithPopup(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    alert("Ustedes se registro a Eassy Veggie");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

// validar usuario
export const loginInit = (userEmail, userPassword) => {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/postPage';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('ingrese email y correo valido');
      window.location.hash = '#/firtpage';
    });
}

// cerrar sesion
export const logOut = () => {
  signOut(auth).then(() => {
    alert("Usted esta cerrando sesion");
    window.location.hash = '#/firtpage';
  }).catch((error) => {
    console.log(error,"aqui esta");
  });
};

// genera la data
export const recet = async(numberData,ingredients, postData) =>{
  const docRef = await addDoc(collection(db, "posts"), {
    nombreRecetas: numberData,
    ingredientes: ingredients,
    recetas: postData,
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
    userId:auth.currentUser.uid,
    like: [],
    numberLike: 0,
    date:Date(Date.now()),
  
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef;
  };
  
//lee la data
export const readData = () => {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  onSnapshot(q, (querySnapshot) => {
    const postsBox = [];
    querySnapshot.forEach((doc) => {
      const task = {};
      task.id = doc.id;
      task.data = doc.data();
      postsBox.push({ task });

    });
    look(postsBox);
    console.log("recetas", postsBox.join(", "));
    return postsBox;
  });
};


//observador
export const lookout = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      window.location.hash = '#/postPage';
      console.log(uid)
      console.log('auth: sign in')
    } else {
      if (!window.location.hash.includes('registerPage')) {
        window.location.hash = '#/firtpage'
      }
      console.log('auth: sign out');
    }
  });
};

// borrar post
export const deletePost = async (id) => {
  await deleteDoc(doc(db, "posts", id));
  console.log(id);
};

// editar post
export const editPost = async (id,numberData, ingredients, postData) => {
  const postEdit = doc(db, "posts", id);
  await updateDoc(postEdit, {
    nombreRecetas: numberData,
    ingredientes: ingredients,
    recetas: postData,
  });
}

//dar like a las publicacion 
export const likepost = async (id, userId) => {
  const postRef = doc(db, "posts", id);
  const docLike = await getDoc(postRef);
  const dataLike = docLike.data();
  console.log(dataLike)
  const likesCount = dataLike.numberLike;

  if ((dataLike.like).includes(userId)) {
    await updateDoc(postRef, {
      like: arrayRemove(userId),
      numberLike: likesCount - 1,
    });
  } else {
    await updateDoc(postRef, {
      like: arrayUnion(userId),
      numberLike: likesCount + 1,
    });
  }
};
