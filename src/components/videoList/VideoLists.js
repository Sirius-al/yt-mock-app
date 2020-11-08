import React from 'react'

import VideoItems from './VideoItems'

const VideoLists = props => {
    const {videos, onVideoSelect} = props;

    const SingleVideo = videos.map(video => {
        return (

            <VideoItems
              key={video.id.videoId}
              video={video}
              onVideoSelect={onVideoSelect}
              />
        )
    })
    return (
        <div className="ui relaxed divided list">{SingleVideo}</div>
    )
}

export default VideoLists;