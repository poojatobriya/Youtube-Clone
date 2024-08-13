import React, { useEffect, useState } from 'react'
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.jpeg';
import thumbnail2 from '../../assets/thumbnail2.jpeg';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.jpeg';
import thumbnail5 from '../../assets/thumbnail5.jpeg';
import thumbnail6 from '../../assets/thumbnail6.jpeg';
import thumbnail7 from '../../assets/thumbnail7.jpeg';
import thumbnail8 from '../../assets/thumbnail8.jpeg';

const recommended = ({categoryId}) => {

 const [apiData,setapiData]=useState([]);

 const fetchData = async () => {
    const relatedvideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
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
 },[])

  return (
    <div className='recommended'>
      <div className='side-video-list'>
        <img src={thumbnail1} alt=""/>
        <div className='vid-info'>
            <h4>
              best chanel to helo to be a web developer
            </h4>
            <p>great stack</p>
            <p>199k views</p>
        </div>
      </div>

     

    </div>
  )
}

export default recommended
