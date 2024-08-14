
   
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
            <span>Music</span>
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
            <span>Entertainment</span>
        </div>

        <div className={`sidebar-item ${category===28?"active":""}`}  onClick={()=>setcategory(28)}>
            <i className="fas fa-fire"></i>
            <span>Science & Technology</span>
        </div>
        <div className={`sidebar-item ${category===0?"active":""}`}  onClick={()=>setcategory(20)}>
            <i className="fas fa-play-circle"></i>
            <span>Gaming</span>
        </div>
        <div className={`sidebar-item ${category===0?"active":""}`}  onClick={()=>setcategory(23)}>
            <i className="fas fa-play-circle"></i>
            <span>Comedy</span>
        </div>
       
    </div>
    );
  }
  
  export default Sidebar;
  