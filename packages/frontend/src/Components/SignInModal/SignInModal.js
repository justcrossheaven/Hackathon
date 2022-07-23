import React from "react"
import close from "../../img/modal-close.png"

export default function SignInModal() {
    return (
        <div className="sign-in">
            <nav className="sign-nav">
                <h2 className="sign-header">Sign In</h2>
                <img src={close} alt="close-button"/>
            </nav>
            <div>
                <div>
                    <label className="email-label">Email Address</label>
                    <input className="email-input"></input>
                </div>
                <div>
                    <label className="password-label">Password</label>
                    <input className="password-input"></input>
                </div>
                <div>
                    <p className="register-message">Don't have an account? <u>Register Here</u></p>
                </div>
            </div>
            <button>Sign In</button>
        </div>
    )
}