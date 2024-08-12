import React from 'react';
import Playvideo from './Playvideo/Playvideo';
import Recommended from './Recommended/Recommended';
import './Video.css';
import {useParams} from 'react-router-dom';

const Video = () => {
    const {videoId,categoryId}=useParams();

  return (
    <div className='play-container'>
      
      <Playvideo videoId={videoId}/> 
      <Recommended/>
    </div>
  )
}

export default Video;
