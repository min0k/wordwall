import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<StartPage />} />
          <Route path="/trivia" element={<GamePage />} />
          <Route path="/gameover" element={<EndPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<StartPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
