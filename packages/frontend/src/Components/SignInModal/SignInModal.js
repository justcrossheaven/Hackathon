import { React, useState } from "react";
import close from "../../img/modal-close.png";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  signInWithEmail,
} from "../../Firebase";
import { Link } from "react-router-dom";
import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignInModal() {
  const firebaseConfig = {
    apiKey: "AIzaSyARbO7S9QW-ZKAgxoNsP3GSpnfKuFLVRr8",
    authDomain: "auth-29355.firebaseapp.com",
    projectId: "auth-29355",
    storageBucket: "auth-29355.appspot.com",
    messagingSenderId: "722371298793",
    appId: "1:722371298793:web:17fe547bb60f08cef6b778"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider()

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(result => {
        alert("sucessfully logged in!");
        return result;
    }).catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage);
    })
  }

  const signInWithGoogle = () =>  {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    }).catch((error) => {
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

  

  return (
    <div className="home-canvas">
      <div className="sign-in">
        <nav className="sign-nav">
          <h2 className="sign-header">Sign In</h2>
          <Link to="/">
            <img
              src={close}
              style={{ width: "32px", height: "auto" }}
              alt="close-button"
            />
          </Link>
        </nav>

        <div className="form">
          <label className="email-label">Email Address</label>
          <input className="email-input" onChange={e => setEmail(e.target.value)}></input>
          <label className="password-label">Password</label>
          <input className="password-input" onChange={e => setPassword(e.target.value)}></input>
          <p className="register-message">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "white" }}>
              Register Here
            </Link>
          </p>
        </div>
        
        <button className="form-sign" onClick={() => signInWithEmail(email, password)}>Sign In</button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="form-sign">Sign In</button>
          <button onClick={signInWithGoogle} className="login-with-google-btn">
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );


}
