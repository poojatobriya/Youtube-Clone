import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body  fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="C:\Users\drama\Desktop\Youtube-clone\src\assets\youtube.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Youtube
      </a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" class="btn btn-danger">Search</button>
      </form>
      
   </div>
 </nav>
  )
}

export default Navbar;
