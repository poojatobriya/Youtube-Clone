import React, { useEffect, useState } from 'react'
import './Recommended.css';
import {Link} from 'react-router-dom';

import { API_KEY } from '../../data';

const Recommended = ({categoryId}) => {

 const [apiData,setapiData]=useState([]);

 const fetchData = async () => {
    const relatedvideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
                           //https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=0&key=[YOUR_API_KEY]
    try {
        const response = await fetch(relatedvideoUrl);
        const data = await response.json();
        setapiData(data.items);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
};

 useEffect(()=>{
        fetchData();
 },[]);

  return (
    <div className='recommended'>

     {apiData.map((item,index)=>{
        return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
            <img src={item.snippet.thumbnails.medium.url} alt=""/>
            <div className='vid-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{item.statistics.viewCount} views</p>
            </div>
          </Link>
        )
     })}

      

    </div>
  )
}

export default Recommended;
