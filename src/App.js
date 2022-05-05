import React from "react";
import Home from "./comps/Home";
import About from "./comps/About";
import Contact from "./comps/Contact";
import NavBar from "./comps/NavBar";
import License from "./comps/License";
import Results from "./comps/Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
        <Router>
        <div className="main-content">
            <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Results" element={<Results />} />
        </Routes>
            <License />
        </div>
        </Router>
    );

}

export default App;
