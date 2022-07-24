import React from "react"
import close from "../../img/modal-close.png"

export default function RegisterModal() {
    return (
        <div className="sign-in">
            <nav className="sign-nav">
                <h2  className="sign-header">Register</h2>
                <img src={close} alt="close-button"/>
            </nav>
            <div className="form">
                <label className="email-label">Email Address</label>
                <input className="email-input"></input>
                <label className="password-label">Password</label>
                <input className="password-input"></input>
            </div>
            <button className="form-register">Register</button>
        </div>
    )
}