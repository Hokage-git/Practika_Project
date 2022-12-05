import React, {useState} from "react";
import MainRegPage from "./Pages/MainRegPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnregPageJS from "./Pages/UnregPageJS";
import Test from "./Pages/Test";

function App() {

  const [testUrl,setTestUrl] = useState("/")

  return (
      <div className = "App">
        <Router>
          <Routes>
            <Route path="/home" element={<MainRegPage/>}/>
            <Route path="/" element={<UnregPageJS/>}/>
            <Route path={"/test"} element={<Test/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
