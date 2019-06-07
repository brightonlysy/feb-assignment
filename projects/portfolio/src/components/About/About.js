import React, { Component } from 'react';
import './About.css'
import Picture from '../../me.jpg'

class About extends Component {
    
    render() {
        return (
            <div className='about-container'>
                <br></br>
                
                <img alt="" className="pic" src={Picture} />
                <h1 className="about">ABOUT</h1>
            
                <p className="description">I’m a Jr. Full Stack Web Developer from Salt Lake City, 
                    Utah. I have a serious passion for learning, I am always looking to try 
                    something new. Some activities you can find me doing are Snowboarding, 
                    Running, and rock climbing.
                </p>
                <br id="projects"></br>
            </div>
            
        );
    }
}

export default About;