import React, { Component } from 'react';
import video from '../../PurpleGrid.mp4';
import VideoCover from 'react-video-cover';

import './Cover.css'

class Cover extends Component {

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
            <div>
                 
                <div className='video'>
                    <VideoCover
                        source={VideoCover}
                        videoOptions={videoOptions}>
                    </VideoCover>
                </div>

                <header className="app-header">
                    <div className="htext">
                    
                        Hello, I'm
                        <span className="highlight"> Brighton Lysy</span>.
                        
                        <p>I'm a full-stack web developer.</p>
                        
                    </div>
                </header>
            </div>
        );
    }
}

export default Cover;