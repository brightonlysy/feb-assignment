import React, { Component } from 'react';
import './App.css';
import video from './PurpleGrid.mp4';
import VideoCover from 'react-video-cover';
import Navbar from './components/Navbar';

class App extends Component {
  componentDidMount() {
    this.videoRef.play();

  }
  render() {
    const videoOptions = {
      src: video,
      ref: videoRef => {
        this.videoRef = videoRef;
      },
      loop: true
    };
  
    return (
      <div className="App">
       
        <div style={{
          overflow: 'hidden',
          }}>
          <VideoCover
          
          source={VideoCover}
          videoOptions={videoOptions}
          style={{ height: 400}}
          
        >hello</VideoCover>
        
        </div>
        <header className="app-header">
          
          <div className="htext">
          
            Hello, I'm
            <span class="highlight"> Brighton Lysy</span>.
            
            <p>I'm a full-stack web developer.</p>
            
          </div>
          
        </header>
        <Navbar />
        <body className="body">
          <div>
            <h1 className="about">ABOUT</h1>
            <h3>Fast</h3>
            <h3>Dynamic</h3>
            <h3>Responsive</h3>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
