import React, { useEffect, useState } from 'react'
import './Playvideo.css';
import Like from '../../assets/Like.jpeg';
import Dislike from '../../assets/Dislike.png';
import Share from '../../assets/Share.png';
import Save from '../../assets/Save.png';
import video1 from '../../assets/video1.mp4';
import zakir from '../../assets/zakir.jpeg'
import { API_KEY } from '../../data';

const Playvideo = ({videoId}) => {

 const[apiData,setapiData]=useState(null);

 const fetchVideoData = async () => {
    const videoDetailUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    
    try {
      const response = await fetch(videoDetailUrl);
      const data = await response.json();
      setapiData(data.items[0]);
    } catch (error) {
      console.error('Error fetching the video data:', error);
    }
  };
  
 useEffect(()=>{
      fetchVideoData();
 },[])
  return (
    <div className='play-video'>
      {/* <video src={ video1} controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData.snippet.title}</h3>
      <div className='play-video-info'>
        <p>{apiData.statistics.viewCount}views • {apiData.snippet.publishedAt}</p>
        <div>
            <span><img src={Like} alt=""/>125</span>
            <span><img src={Dislike}alt=""/>23</span>
            <span><img src={Share}alt=""/>share</span>
            <span><img src={Save}alt=""/>save</span>
        </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img src={zakir} alt=""/>
        <div>
            <p>great stack</p>
            <span>1m subscriber</span>
        </div>
        <button>subscribe</button>
        </div>
        <div className='vid-description'>
            <p>channel thtt makes learning easy </p>
            <p>subscribe towrvh more </p>
            <hr/>
            <h4> 100 comments</h4>
            <div className='comments'>
                <img src={zakir} alt=""/>
                <div>
                    <h3>nick jones <span>1 day ago</span></h3>
                    <p>a best laughing show of zakirkhan </p>
                    <div className='comment-action'>
                        <img src={Like} alt=""/>
                        <span>244</span>
                        <img src={Dislike} alt=""/>
                        <span>10</span>
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src="" alt=""/>
                <div>
                    <h3>nick jones <span>1 day ago</span></h3>
                    <p>a best laughing show of zakirkhan </p>
                    <div className='comment-action'>
                        <img src={Like} alt=""/>
                        <span>244</span>
                        <img src={Dislike} alt=""/>
                        <span>10</span>
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src="" alt=""/>
                <div>
                    <h3>nick jones <span>1 day ago</span></h3>
                    <p>a best laughing show of zakirkhan </p>
                    <div className='comment-action'>
                        <img src={Like} alt=""/>
                        <span>244</span>
                        <img src={Dislike} alt=""/>
                        <span>10</span>
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src="" alt=""/>
                <div>
                    <h3>nick jones <span>1 day ago</span></h3>
                    <p>a best laughing show of zakirkhan </p>
                    <div className='comment-action'>
                        <img src={Like} alt=""/>
                        <span>244</span>
                        <img src={Dislike} alt=""/>
                        <span>10</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Playvideo;
