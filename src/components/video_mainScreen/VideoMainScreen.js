import React from 'react'

import "./VideoMainScreen.css"

const VideoMainScreen = ({ video }) => {



    if (!video) {
        return (
          <div className="Loader ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">
                Please Search and select a video to play
              </div>
            </div>
          </div>
        );
        
    } else {
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video play" autoPlay src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        ) 
    }
}

export default VideoMainScreen;
