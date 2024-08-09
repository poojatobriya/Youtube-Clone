import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column  bg-dark ">
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-home"></i>
        <span className="ml-3 badge mt-5 text-danger ">Home</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-fire"></i>
        <span className="ml-3 badge mt-4 text-danger">Trending</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-thumbs-up"></i>
        <span className="ml-3 badge mt-4 text-danger">Liked Videos</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-play-circle"></i>
        <span className="ml-3 badge mt-4 text-danger">Subscriptions</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-history"></i>
        <span className="ml-3 badge mt-4 text-danger">History</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-clock"></i>
        <span className="ml-3 badge mt-4 text-danger">Watch Later</span>
      </a>
      <a href="/" className="sidebar__item d-flex align-items-center p-2">
        <i className="fas fa-cog"></i>
        <span className="ml-3 badge mt-4 text-danger">Settings</span>
      </a>
    </div>
  );
}

export default Sidebar;
