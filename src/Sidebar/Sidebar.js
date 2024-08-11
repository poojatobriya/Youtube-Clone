
   
  import React from 'react';
  import './Sidebar.css';
  
  function Sidebar() {
    return (
      <div class="sidebar">
        <a href="#" class="sidebar-item">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="#" class="sidebar-item">
            <i class="fas fa-fire"></i>
            <span>Trending</span>
        </a>
        <a href="#" class="sidebar-item">
            <i class="fas fa-play-circle"></i>
            <span>Subscriptions</span>
        </a>
        <hr/>
        <a href="#" class="sidebar-item">
            <i class="fas fa-thumbs-up"></i>
            <span>Liked Videos</span>
        </a>
        <a href="#" class="sidebar-item">
            <i class="fas fa-history"></i>
            <span>History</span>
        </a>
        <a href="#" class="sidebar-item">
            <i class="fas fa-clock"></i>
            <span>Watch Later</span>
        </a>
        <a href="#" class="sidebar-item">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
        </a>
    </div>
    );
  }
  
  export default Sidebar;
  