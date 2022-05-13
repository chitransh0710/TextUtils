import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //setalert ftn use to set alert state variable whereas show alert use to display alert

  //message alert type (primary,danger etc.)==type
  //now alert is an object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //toggleMode is a ftn designed by user to enavle diable

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route */}
        {/* exact */}
        {/* path="/" */}
        {/* element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse"
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
