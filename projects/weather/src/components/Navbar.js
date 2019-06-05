import React from 'react';


const Navbar = props => {
    return (
        <div 
        onClick={props.navToggler }
        className={`nav nav-${props.navToggle ? "open" : "close"}`}>
            <div></div>
            <a href="#weather">Weather</a>
            <a href="">Conditions</a>
            <a href="">Humidity</a>
        </div>
    );
}


export default Navbar;