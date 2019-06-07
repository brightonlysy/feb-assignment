import React, { Component } from 'react';
import './Projects.css'
import Mininav from './Mininav'
// import {Switch, Route} from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">PROJECTS</h1>
                <Mininav />
                <div className="pro-display">
                    container
                </div>
                {/* <Switch>
                    <Route exact path='/' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                </Switch> */}
               
            </div>
        );
    }
}

export default Projects;