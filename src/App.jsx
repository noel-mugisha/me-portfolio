import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/Home";

const CBTest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract search params
    const queryParams = location.search; // includes the '?' prefix
    const targetUrl = `catchcoin://${queryParams}`;

    // Redirect to the custom scheme
    window.location.href = targetUrl;

    // Optional: navigate to a fallback page in case redirect fails
    setTimeout(() => {
      navigate("/"); // fallback route
    }, 2000);
  }, [location, navigate]);

  return (
    <div>
      <h2>Redirecting to CatchCoin App...</h2>
    </div>
  );
};

function App() {
  window.oncontextmenu = function () {
    return false;
  };

  document.addEventListener(
    "keydown",
    function (event) {
      var key = event.key || event.keyCode;

      if (key == 123) {
        return false;
      } else if (
        (event.ctrlKey && event.shiftKey && key == 73) ||
        (event.ctrlKey && event.shiftKey && key == 74)
      ) {
        return false;
      }
    },
    false
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wsegue" element={<CBTest />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
