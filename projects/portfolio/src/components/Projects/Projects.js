import React, { Component } from 'react';

import React1 from './All/React'
import Css from './All/Css'
import Javascript from './All/Javascript'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './Projects.css'
// import Mininav from './Mininav'

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            ALL: 'all',
            React: 'react',
            Java: "java",
            CSS: 'css'

        }
    }


    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">PROJECTS</h1>
                    <Router>
                        <div>
                            <nav className="mini">
                            <ul>
                                <div className="wrap">
                                    {/* <li><Link to={'/'} className="all"> All </Link></li> */}
                                    <li><Link to={'/react'} className="react"> React </Link></li>
                                    <li><Link to={'/java'} className="java"></Link> Javascript </li>
                                    <li><Link to={'/css'} className="css"></Link>CSS </li>
                                    
                                    {/* <a className="all" href='all'>ALL</a>
                                    <a className="react" href='react'>React</a>
                                    <a className="java" href='java'>Javascript</a>
                                    <a className="css" href="css">CSS</a> */}
                                </div>
                            </ul>
                            </nav>
                            <Switch>
                                {/* <Route exact path='/' component={All} /> */}
                                <Route path='/react' component={React} />
                                <Route path='/java' component={Javascript} />
                                <Route path='/css' component={CSS} />
                            </Switch>
                            <div className="pro-display">
                                
                            </div>
                        </div>
                    </Router>
                {/* <Switch>
                    <Route exact path='/all' component={} />
                    <Route path='/react' component={} />
                    <Route path='/java' component={} />
                    <Route path='/css' component={} />
                </Switch> */}
               
            </div>
        );
    }
}

export default Projects;