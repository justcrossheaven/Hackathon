import { React, useState, useContext } from "react";
import { userContext } from '../../userContext'; 
import close from "../../img/modal-close.png";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export default function SignInModal() {
  const firebaseConfig = {
    apiKey: "AIzaSyARbO7S9QW-ZKAgxoNsP3GSpnfKuFLVRr8",
    authDomain: "auth-29355.firebaseapp.com",
    projectId: "auth-29355",
    storageBucket: "auth-29355.appspot.com",
    messagingSenderId: "722371298793",
    appId: "1:722371298793:web:17fe547bb60f08cef6b778"
  };
  
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider()

  const { userId, serUser }= useContext(userContext);
  // console.log(userId);
  // console.log(serUser);

  const signInWithGoogle = () =>  {
    signInWithPopup(auth, provider).then((result) => {
      serUser(result.user);
      fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: result.user.uid,
          name: result.user.displayName
        })
      })
    }).then(() => {
      navigate("/list");
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

        <div style={{ display: "flex", alignItems: "center" }}>

          <button onClick={signInWithGoogle} className="login-with-google-btn">
            Sign In With Google
          </button>
          
        </div>
      </div>
    </div>
  );


}
