import logo from './logo.svg';
import './App.css';
import { signInWithGoogle, registerWithEmailAndPassword, signInWithEmail } from './Firebase'; 
import React, { useState } from 'react';
import { userContext } from './userContext';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  
  return (
    <div className="App">
    <userContext.Provider value={{ userId, setUserId }}>
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={signInWithGoogle} className="login-with-google-btn">
            Sign In With Google
          </button>

          <label>Email</label>
          <input type="text" onChange={e => {setUsername(e.target.value)}} />
          <label>Password</label>
          <input type="password" onChange={e => {setPassword(e.target.value)}} />
          <button onClick={(e) => {
            e.preventDefault();
            registerWithEmailAndPassword(username, password)
            }}>Register</button>
          <button onClick={(e) => {
            e.preventDefault();
            signInWithEmail(username, password)
            }}>Sign In</button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      
    </userContext.Provider>
    </div>

  );
}

export default App;
