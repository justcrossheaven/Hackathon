import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARbO7S9QW-ZKAgxoNsP3GSpnfKuFLVRr8",
  authDomain: "auth-29355.firebaseapp.com",
  projectId: "auth-29355",
  storageBucket: "auth-29355.appspot.com",
  messagingSenderId: "722371298793",
  appId: "1:722371298793:web:17fe547bb60f08cef6b778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const registerWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
        alert("successfully registered!");
        return result;
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
    })
}

export const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(result => {
        alert("sucessfully logged in!");
        return result;
    }).catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage);
    })
}

export const signInWithGoogle = () =>  {
    signInWithPopup(auth, provider).then((result) => result.user).catch((error) => {
        console.log(error)
        if (error instanceof FirebaseError) {
            if (error.code === 'auth/invalid-email') {
              alert('Please enter a valid email');
            } else if (error.code === 'auth/user-not-found') {
                alert('No such user');
            } else if (error.code === 'auth/wrong-password') {
                alert('Wrong Password');
            } else {
                alert(error.message);
            }
        }
    })
}; 

