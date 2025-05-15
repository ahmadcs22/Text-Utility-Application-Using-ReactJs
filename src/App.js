import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toogleClick = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title={"TextUtils"}
          about={"About"}
          mode={mode}
          toogleClick={toogleClick}
          modeTitle={"Enable Dark Mode"}
        />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<Textform heading={"Enter text here to Analyze Text"} mode={mode} />}
            />
            <Route path="/about" element={<About title={"About Us"} mode={mode} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
