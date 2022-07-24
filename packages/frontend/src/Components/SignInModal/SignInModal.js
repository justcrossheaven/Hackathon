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
          <input className="email-input"></input>
          <label className="password-label">Password</label>
          <input className="password-input"></input>
          <p className="register-message">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "white" }}>
              Register Here
            </Link>
          </p>
        </div>
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
