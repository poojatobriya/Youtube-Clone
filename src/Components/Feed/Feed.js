import React from 'react'
import './Feed.css';
import { Link } from "react-router-dom";
import thumbnail1 from '../../assets/thumbnail1.jpeg';
import thumbnail2 from '../../assets/thumbnail2.jpeg';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.jpeg';
import thumbnail5 from '../../assets/thumbnail5.jpeg';
import thumbnail6 from '../../assets/thumbnail6.jpeg';
import thumbnail7 from '../../assets/thumbnail7.jpeg';
import thumbnail8 from '../../assets/thumbnail8.jpeg';

const Feed = () => {
  return (
    <div className='Feed'>
        <Link to={`Video/20/2121`} className='Card'>
         <img src={thumbnail1} alt="Video Thumbnail" />
         <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </Link>

        <div className='Card'>
         <img src={thumbnail2} alt="Video Thumbnail" />
         <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail3} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail4} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        
        <div className='Card'>
         <img src={thumbnail5} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail6} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail7} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>
        <div className='Card'>
         <img src={thumbnail8} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>
    
        <div className='Card'>
         <img src={thumbnail1} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail2} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail3} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail4} alt="Video Thumbnail" />
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        
        <div className='Card'>
         <img src={thumbnail5} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail6} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>

        <div className='Card'>
         <img src={thumbnail7} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>
        <div className='Card'>
         <img src={thumbnail8} alt="Video Thumbnail" class="thumbnail"/>
             <h4 class="video-title">Understanding React Hooks</h4>
                <p class="video-channel">CodeAcademy</p>
                <p class="video-meta">2M views • 2 days ago</p>
        </div>
    </div>
  )
}

export default Feed;
