import React from "react";
import close from "../../img/modal-close.png";
import { Link } from "react-router-dom";

export default function RegisterModal() {
  return (
    <div className="home-canvas">
      <div className="sign-in">
        <nav className="sign-nav">
          <h2 className="sign-header">Register</h2>
          <Link to="/login">
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
        </div>
        <button className="form-sign" style={{ marginTop: "32px" }}>
          Register
        </button>
      </div>
    </div>
  );
}
