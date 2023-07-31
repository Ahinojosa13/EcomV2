import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Header from "./components/Nav";
import Home from "./pages/Home";
import ETGP from "./pages/ETGP";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";
// import "../src/pages/styles/";

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/etgp" element={<ETGP />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>    
      // </div>
  );
};


export default App;