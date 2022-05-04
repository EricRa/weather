import React from "react";
import InputZip from "./comps/InputZip";

function App() {


    return (
        
        <div>
            <nav className="nav-container">
                <a className="nav-item" href="/">Weather</a>
                <a className="nav-item" href="/">About</a>
                <a className="nav-item" href="/">Contact</a>
            </nav>

            <InputZip />
        </div>
    );

}

export default App;
