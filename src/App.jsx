import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Dashboard, MainPage, NotFound } from "./Pages/";
import Scanning from "./Pages/Scanning";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/scan" element={<Scanning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
