import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ video, onVideoSelect }) => {
    const renderedList = video.map(res => {
        return <VideoItem
            key={res.id.videoId}
            video={res}
            onVideoSelect={onVideoSelect}
        />
    })
    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList