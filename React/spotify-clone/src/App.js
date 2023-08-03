import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SongUpload from "./Components/SongUpload";
function App() {
  return (
    <div className="app">
      <div className="background"> </div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/upload" element={<SongUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
