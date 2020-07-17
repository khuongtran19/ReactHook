import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'your youtube api key'

const Youtube = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit('skinspotlight')
    }, [])

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        })

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            video={videos}
                            onVideoSelect={video => setSelectedVideo(video)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube