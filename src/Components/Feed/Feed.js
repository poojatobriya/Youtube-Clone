import React, { useEffect, useState } from 'react'
import './Feed.css';
import { Link } from "react-router-dom";
// import {moment} from 'react-moment';

import { API_KEY } from '../../data';

const Feed = ({category}) => {

        const [data, setData]=useState([]);

    // const fetchData= async=>()=>{
    //     const videolist_url=`https:youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopolar&maxResult=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `;
    //     await fetch(videolist_url).then(response=>response.json()).then(data=>setdata(data.items)) 
    // }

    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        //regionCode=US
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
        {data.map((item,index)=>{
            return(
                <Link to={`Video/${item.snippet.categoryId}/${item.id}`} key={index}className='Card'>
                <img src={item.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
                <h4 class="video-title">{item.snippet.title}</h4>
                       <p class="video-channel">{item.snippet.channelTitle}</p>
                       <p class="video-meta">{item.statistics.viewCount}views• {item.snippet.publishedAt}</p>
               </Link>
       
            )
        })}
       

        
    </div>
  )
}

export default Feed;
