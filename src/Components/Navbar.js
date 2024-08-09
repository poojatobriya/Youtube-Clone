import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src="C:\Users\drama\Desktop\youtube-clone\src\Components\images.jpg" 
          alt="YouTube"
          className="navbar__logo"
        />
      </a>
     

      
        <form className="form-inline my-2 my-lg-0">
            
          <input
        
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
         <button type="button" class="btn btn-danger btn-sm " >Search</button>
        </form>
        
    </nav>
  );
}

export default Navbar;
