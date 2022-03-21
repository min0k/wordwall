import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Wall from "./pages/Wall";

// https://wordwallserver-et57m7q3ca-uw.a.run.app/add-word?word=ITWORKS&user=human

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Wall />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Wall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
