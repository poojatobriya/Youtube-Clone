import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Navbar from './components/Navbar';


function VideoPage({ match }) {
  const videoUrl = `https://www.youtube.com/embed/${match.params.videoId}`;

  return (
    <div>
      <Navbar />
      <div className="container">
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}

export default VideoPage;