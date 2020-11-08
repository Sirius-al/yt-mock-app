import React from 'react'
import './VideoItems.css'


const VideoItems = ({ video, onVideoSelect }) => {

    // console.log(video)

    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          alt={video.snippet.title}
          className="ui tiny image"
          src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <p className="header">{video.snippet.title}</p>
          {/* <div className="description">{video.snippet.description}</div> */}
        </div>
      </div>


    );
};

export default VideoItems;