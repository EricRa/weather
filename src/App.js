import React from "react";
import Home from "./comps/Home";
import InputZip from "./comps/InputZip";
import NavBar from "./comps/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
        <Router>
        <div className="main-content">
            <NavBar />
        <Routes>
            <Route path="/">
                <Home />
            </Route>
        </Routes>
            <Home />
        </div>
        </Router>
    );

}

export default App;
