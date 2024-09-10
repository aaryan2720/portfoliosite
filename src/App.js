import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const resumePdfUrl = "https://www.canva.com/design/DAGJEVY57ao/Z_CqGjT2IrD8rQXgqU69-Q/edit?utm_content=DAGJEVY57ao&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/resume" 
            element={() => { 
              window.location.href = resumePdfUrl; 
              return null;
            }} 
          />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
