import React from 'react';


function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="480"
        src={videoUrl}
        title="Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
