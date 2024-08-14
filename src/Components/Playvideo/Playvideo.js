import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Playvideo.css';
import Like from '../../assets/Like.jpeg';
import Dislike from '../../assets/Dislike.png';
import Share from '../../assets/Share.png';
import Save from '../../assets/Save.png';
// import video1 from '../../assets/video1.mp4';
// import zakir from '../../assets/zakir.jpeg';
import { API_KEY } from '../../data';
import moment from 'react-moment';


const Playvideo = () => {

 const {videoId}=useParams();

 const[apiData,setapiData]=useState(null);
 const[channelData,setchannelData]=useState(null);
 const[commentData,setcommentData]=useState([]);

 const fetchVideoData = async () => {
    const videoDetailUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
                          //https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]
    try {
      const response = await fetch(videoDetailUrl);
      const data = await response.json();
      setapiData(data.items[0]);
    } catch (error) {
      console.error('Error fetching the video data:', error);
    }
  };

  const fetchotherData = async () => {
    //feching channel data
    const videoChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
                          // https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
    try {
      const response = await fetch(videoChannelUrl);
      const data = await response.json();
      setchannelData(data.items[0]);
    } catch (error) {
      console.error('Error fetching the channel data:', error);
    }

    //fetching comment data
    const commentDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
                          //https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY]
    try {
      const response = await fetch(commentDataUrl);
      const data = await response.json();
      setcommentData(data.items);
    } catch (error) {
      console.error('Error fetching the comment data:', error);
    }

  };
  
 useEffect(()=>{
      fetchVideoData();
 },[videoId])

 useEffect(()=>{
    fetchotherData();
},[apiData])

  return (
    <div className='play-video'>


      {/* <video src={ video1} controls autoPlay muted></video> */}

      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"title here"}</h3>
      <div className='play-video-info'>
        <p>{apiData?apiData.statistics.viewCount:"2M"} views • {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
        <div>
            <span><img src={Like} alt=""/>{apiData?apiData.statistics.likeCount:""}</span>
            <span><img src={Dislike}alt=""/></span>
            <span><img src={Share}alt=""/>share</span>
            <span><img src={Save}alt=""/>save</span>
        </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img src={channelData?channelData.snippet.thumbnails.default.url:"jack"} alt=""/>
        <div>
            <p>{apiData?apiData.snippet.channelTitle:"stack"}</p>
            <span>{channelData?channelData.statistics.subscriberCount:"1M"} subscriber</span>
        </div>
        <button>subscribe</button>
        </div>
        <div className='vid-description'>
           <p>{apiData?apiData.snippet.description.slice(0,250):"video description here"}</p>
            <hr/>
            <h4> {apiData?apiData.statistics.commentCount:150}comments</h4>

            {commentData.map((item, index)=>{
                 return(
                    <div key={index} className='comments'>
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay} </p>
                        <div className='comment-action'>
                            <img src={Like} alt=""/>
                            <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                            <img src={Dislike} alt=""/>
                            <span>10</span>
                        </div>
                    </div>
                </div>
    
                 )
            })}

           

          
        </div>
    </div>
  )
}

export default Playvideo;
