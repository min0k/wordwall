import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Mainpage from "./pages/Main";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
