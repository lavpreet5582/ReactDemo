import "./App.css";
import Alert from "./Components/Alert";
import Aboutus from "./Components/Aboutus";
import Navbar from "./Components/Navbar/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    const newBackgroundColor = mode === "light" ? "#363956" : "white";
    setMode(newMode);
    document.body.style.backgroundColor = newBackgroundColor;
    showAlert(
      `${
        newMode.charAt(0).toUpperCase() + newMode.slice(1)
      } mode has been enabled`,
      "success"
    );
  };
  return (
    <Router>
      <Navbar title="React Demo" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<Aboutus />} />
          {/* <Route exact path="/" Component={TextForm} /> */}
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
      {/* <Navbar/> */}
    </Router>
  );
}

export default App;
