import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div 
          style={{
            width: '100vw',
            height: '75vh',
            overflow: 'hidden',
          }}>
        <video
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
          }}
      src=""
    />

    <video src="180503_02_PurpleGrid.mp4" />
    </div>
      <header className="App-header">
      <section id="home" class="flex height-fix">
        <div id="pt" class="canvas">
          <canvas id="canvas"></canvas>
        </div>
        </section>
    <div class="flex">

      </div>
        <div class="text">
            <p>Hello, I'm</p>
          <span class="highlight">Brighton Lysy</span>.
          
          <p>I'm a full-stack web developer.</p>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
