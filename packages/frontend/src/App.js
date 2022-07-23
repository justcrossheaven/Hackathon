import React from "react";
import logo from './logo.svg';
import './App.css';
import './Components/HomePage/HomePage'
import HomePage from "./Components/HomePage/HomePage";
import SignInModal from "./Components/SignInModal/SignInModal";
// import RichTextExample from './components/TextEditor';

function App() {
  return (
    <div className="App">   
      <HomePage/>
      <SignInModal/>
    </div>
  );
}

export default App;
