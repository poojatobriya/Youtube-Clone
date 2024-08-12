import React, { useEffect, useState } from 'react'
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
import { API_KEY } from '../../data';

const Feed = ({category}) => {

        const [data, setData]=useState([]);

    // const fetchData= async=>()=>{
    //     const videolist_url=`https:youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopolar&maxResult=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `;
    //     await fetch(videolist_url).then(response=>response.json()).then(data=>setdata(data.items)) 
    // }

    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        
        try {
            const response = await fetch(videoListUrl);
            const data = await response.json();
            setData(data.items);
        } catch (error) {
            console.error('Error fetching the data:', error);
        }
    };
    

    useEffect(()=>{
      fetchData();
    },[category]);

  return (
    <div className='Feed'>
        {data.map((item,idex)=>{
            return(
                <Link to={`Video/${item.snippet.categoryId}/${item.id}`} className='Card'>
                <img src={item.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
                <h4 class="video-title">Understanding React Hooks</h4>
                       <p class="video-channel">CodeAcademy</p>
                       <p class="video-meta">2M views • 2 days ago</p>
               </Link>
       
            )
        })}
       

        
    </div>
  )
}

export default Feed;
