import React, { useState } from "react";
import close from "../../img/modal-close.png";
import { Link } from "react-router-dom";

export default function CreateDocPage() {
  const [title, setTitle] = useState("");
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="home-canvas">
      <div className="sign-in">
        <nav className="sign-nav">
          <h2 className="sign-header">Create New Document</h2>
          <Link to="/list">
            <img
              src={close}
              style={{ width: "32px", height: "auto" }}
              alt="close-button"
            />
          </Link>
        </nav>
        <div className="form">
          <label className="email-label">Title</label>
          <input
            className="email-input"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          ></input>
          <label className="password-label">Desired Word Count</label>
          <input
            className="password-input"
            onChange={(e) => {
              e.preventDefault();
              setWordCount(e.target.value);
            }}
          ></input>
        </div>
        <button className="form-sign" style={{ marginTop: "32px" }}>
          Create
        </button>
      </div>
    </div>
  );
}
