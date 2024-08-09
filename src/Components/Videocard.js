import React from 'react';
import './VideoCard.css';

function VideoCard({ thumbnail, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="card video-card mb-4">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body d-flex">
        <img src={channelImage} alt={channel} className="channel-img mr-3" />
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{channel}</p>
          <p className="card-text">
            <small className="text-muted">{views} • {timestamp}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
