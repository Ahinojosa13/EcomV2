import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Nav";
import Home from "./pages/Home";
import ETGP from "./pages/ETGP";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
// import "../src/pages/styles/";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/etgp" element={<ETGP />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>    
      </div>
  );
}

export default App;