import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Privacy from "./screens/Privacy";
import Terms from "./screens/Terms";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<Terms />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
