import React from "react";
import "./styles.css";
import About from "./about.js";
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 

function Navbar(){
    return(
        <div className="navbar">
            {/* <a href="#join">About</a> */}
            <Link to="/about">About</Link>
            <a href="#prevent">Prevent</a>
            <a  href="#about">Stats</a>
            <a  href="#contact">Testing Sites</a>
        </div>
    );
}

export default Navbar;