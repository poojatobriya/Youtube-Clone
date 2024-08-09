import React, { useState, useEffect } from 'react';
import VideoCard from './components/Videocard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import axios from 'axios';

import './HomePage.css';

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video data from an API 
    axios.get('/api/videos') // Replace with your API endpoint
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Navbar />
        <div className="container">
          <div className="row">
            {videos.map(video => (
              <div className="col-md-4" key={video.id}>
                <VideoCard
                  thumbnail={video.thumbnail}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  timestamp={video.timestamp}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
