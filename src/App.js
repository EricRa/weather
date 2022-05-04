import React from "react";
import InputZip from "./comps/InputZip";
import NavBar from "./comps/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {


    return (
        <Router>
        <div>
            <NavBar />

            <InputZip />
        </div>
        </Router>
    );

}

export default App;
