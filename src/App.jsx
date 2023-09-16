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
    // Define different AOS options for smaller screens
    const aosOptions =
      window.innerWidth < 768
        ? {
            duration: 500, // Adjust the duration for smaller screens
            offset: 0, // Adjust the offset for smaller screens
          }
        : {
            duration: 1000, // Default duration
            offset: 200, // Default offset
          };

    AOS.init(aosOptions);
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
