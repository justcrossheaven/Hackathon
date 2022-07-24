import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import EditPage from "./Components/EditPage/EditPage";
import SignInModal from "./Components/SignInModal/SignInModal";
import RegisterModal from "./Components/RegisterModal/RegisterModal";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { userContext } from "./userContext";
import React, { useState } from "react";
import ListPage from "./components/ListPage/ListPage";

function App() {
  const [userId, setUserId] = useState("");

  return (
    <userContext.Provider value={{ userId, setUserId }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/edit" element={<EditPage />} />
          {/* <Route exact path="/list" element={<ListPage/>} /> */}
          <Route exact path="/list" element={<ListPage />} />
          <Route exact path="/login" element={<SignInModal />} />
          <Route exact path="/register" element={<RegisterModal />} />

          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
