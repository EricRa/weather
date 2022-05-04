import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="nav-container">
            <Link className="nav-item" to="/">Weather</Link>
            <Link className="nav-item" to="/about">About</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
    </nav>
    )

}

export default NavBar;