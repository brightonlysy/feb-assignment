import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    const styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        border: "2px red solid",

    }
    return (
        <div style={styles}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/calculator">Calculator</Link>
        </div>
    );
}

export default Navbar