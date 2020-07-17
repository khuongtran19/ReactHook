import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            className='item'
            onClick={() => onVideoSelect(video)}
            style={{
                display: 'flex !important',
                alignItems: 'center !important',
                cursor: 'pointer'
            }}
        >
            <img
                src={video.snippet.thumbnails.medium.url}
                className='ui image'
                style={{ maxWidth: '180px' }}
                alt={video.snippet.thumbnails.medium} />
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>

        </div>
    )
}

export default VideoItem