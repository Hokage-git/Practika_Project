import React, {useState} from "react";
import MainRegPage from "./Pages/MainRegPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnregPageJS from "./Pages/UnregPageJS";
import Profile from "./Pages/profile";

function App() {

  return (
      <div className = "App">
        <Router>
          <Routes>
            <Route path="/home" element={<MainRegPage/>}/>
            <Route path="/" element={<UnregPageJS/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
