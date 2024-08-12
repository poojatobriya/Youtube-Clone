import React from 'react';
import Playvideo from './Playvideo/Playvideo';
import Recommended from './Recommended/Recommended';
import './Video.css';

const Video = () => {
  return (
    <div className='play-container'>
      
      <Playvideo/>
      <Recommended/>
    </div>
  )
}

export default Video;
