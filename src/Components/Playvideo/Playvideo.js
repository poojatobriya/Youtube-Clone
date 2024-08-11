import React from 'react'
import './playvideo.css';

const playvideo = () => {
  return (
    <div className='play-video'>
      <video src={ video1} controls autoPlay muted></video>
      <h3>{video.title}</h3>
        <p>{video.channel}</p>
        <p>{video.views} views • {video.timeAgo}</p>
    </div>
  )
}

export default playvideo;
