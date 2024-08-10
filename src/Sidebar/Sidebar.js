
   
  import React from 'react';
  import './Sidebar.css';
  
  function Sidebar() {
    return (
      <div className="sidebar d-flex flex-column bg-dark">
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-home"></i>
          <span className="ml-3">Home</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-fire"></i>
          <span className="ml-3">Trending</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-thumbs-up"></i>
          <span className="ml-3">Liked Videos</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-play-circle"></i>
          <span className="ml-3">Subscriptions</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-history"></i>
          <span className="ml-3">History</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-clock"></i>
          <span className="ml-3">Watch Later</span>
        </a>
        <a href="/" className="sidebar__item d-flex align-items-center p-4 text-light">
          <i className="fas fa-cog"></i>
          <span className="ml-3">Settings</span>
        </a>
      </div>
    );
  }
  
  export default Sidebar;
  