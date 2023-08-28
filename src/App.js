import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import BackgroundAnimate from "./Components/BackgroundAnimate";
import InputShortener from "./Components/InputShortener";
import LinkResult from "./Components/LinkResult";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import { auth } from "./firebase.js";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="container">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
