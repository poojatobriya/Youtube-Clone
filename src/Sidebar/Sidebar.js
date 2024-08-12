
   
  import React from 'react';
  import './Sidebar.css';
  
  const Sidebar =({category,setcategory})=> {
    return (
      <div className="sidebar">
        <div className={`sidebar-item ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
            <i className="fas fa-home"></i>
            <span>Home</span>
        </div>
        <div className={`sidebar-item ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
            <i className="fas fa-fire"></i>
            <span>music</span>
        </div>

        <div className={`sidebar-item ${category===17?"active":""}`}  onClick={()=>setcategory(17)}>
            <i className="fas fa-fire"></i>
            <span>Sports</span>
        </div>
        <div className={`sidebar-item ${category===25?"active":""}`}  onClick={()=>setcategory(25)}>
            <i className="fas fa-fire"></i>
            <span>News</span>
        </div>
        <div className={`sidebar-item ${category===24?"active":""}`}  onClick={()=>setcategory(24)}>
            <i className="fas fa-fire"></i>
            <span>entertainment</span>
        </div>

        <div className={`sidebar-item ${category===28?"active":""}`}  onClick={()=>setcategory(28)}>
            <i className="fas fa-fire"></i>
            <span>Technology</span>
        </div>
        <div className={`sidebar-item ${category===0?"active":""}`}  onClick={()=>setcategory(0)}>
            <i className="fas fa-play-circle"></i>
            <span>Subscriptions</span>
        </div>
        <hr/>
        <div className="sidebar-item" onClick={()=>setcategory(0)}>
            <i className="fas fa-thumbs-up"></i>
            <span>Liked Videos</span>
        </div>
        <div className="sidebar-item" onClick={()=>setcategory(0)}>
            <i className="fas fa-history"></i>
            <span>History</span>
        </div>
        <div className="sidebar-item"onClick={()=>setcategory(0)}>
            <i className="fas fa-clock"></i>
            <span>Watch Later</span>
        </div>
        <div className="sidebar-item"onClick={()=>setcategory(0)}>
            <i className="fas fa-cog"></i>
            <span>Settings</span>
        </div>
    </div>
    );
  }
  
  export default Sidebar;
  