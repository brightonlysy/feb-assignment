import React, { Component } from 'react';

import './App.css';

import Cover from './components/Cover/Cover'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Footer from './components/Contact/Footer/Footer';

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
        <div>
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
