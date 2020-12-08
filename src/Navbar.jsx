import React from "react";
import "./styles.css";

function Navbar(){
    return(
        <div className="navbar">
            <a href="#join">About</a>
            <a  href="#about">Stats</a>
            <a href="#projects">Prevent</a>
            <a  href="#contact">Testing</a>
        </div>
    );
}

export default Navbar;