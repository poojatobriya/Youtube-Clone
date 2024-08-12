import React from 'react'
import './Playvideo.css';
import Like from '../../assets/Like.jpeg';
import Dislike from '../../assets/Dislike.png';
import Share from '../../assets/Share.png';
import Save from '../../assets/Save.png';
import video1 from '../../assets/video1.mp4';
import zakir from '../../assets/zakir.jpeg'

const playvideo = () => {
  return (
    <div className='play-video'>
      <video src={ video1} controls autoPlay muted></video>
      <h3>one and nly stand up comedian mr. zakir khan</h3>
      <div className='play-video-info'>
        <p>zakir khan</p>
        <p>200k views • 15min ago</p>
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

export default playvideo;
