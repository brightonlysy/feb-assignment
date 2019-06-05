import React, { Component } from 'react';
import './App.css';

import Cover from './components/Cover/Cover'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

class App extends Component {
  
  render() {
    
  
    return (
      <div className="App">
        <Cover />
        <Navbar />
        <body className="body">
          <div>
            <About />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
