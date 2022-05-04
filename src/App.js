import React from "react";
import Home from "./comps/Home";
import About from "./comps/About";
import Contact from "./comps/Contact";
import NavBar from "./comps/NavBar";
import License from "./comps/License";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
        <Router>
        <div className="main-content">
            <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
            <License />
        </div>
        </Router>
    );

}

export default App;
