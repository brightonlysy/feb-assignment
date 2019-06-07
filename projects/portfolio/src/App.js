import React, { Component } from 'react';
import './App.css';

import Cover from './components/Cover/Cover'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <Navbar />
        <div>
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
