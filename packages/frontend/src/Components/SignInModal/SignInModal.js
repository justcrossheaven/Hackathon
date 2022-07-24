import React from "react";
import close from "../../img/modal-close.png";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  signInWithEmail,
} from "../../Firebase";
import { Link } from "react-router-dom";

export default function SignInModal() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div className="sign-in">
        <nav className="sign-nav">
          <h2 className="sign-header">Sign In</h2>
          <img src={close} alt="close-button" />
        </nav>
        <div className="form">
          <label className="email-label">Email Address</label>
          <input className="email-input"></input>
          <label className="password-label">Password</label>
          <input className="password-input"></input>
          <p className="register-message">
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
        <button className="form-sign">Sign In</button>
        <button onClick={signInWithGoogle} className="login-with-google-btn">
          Sign In With Google
        </button>
      </div>
    </div>
  );
}
