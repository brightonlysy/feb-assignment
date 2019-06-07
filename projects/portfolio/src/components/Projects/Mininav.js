import React, { Component } from 'react';
import './Mininav.css';
// import {Link} from 'react-router-dom';

class Mininav extends Component {
    render() {
        return (
            <nav className="mini">
                <div className="wrap">
                    <a className="all" href='all'>ALL</a>
                    <a className="react" href='react'>React</a>
                    <a className="java" href='java'>Javascript</a>
                    <a className="css" href="css">CSS</a>
                </div>
            </nav>
        
        );
    }
}

export default Mininav;