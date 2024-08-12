import React from 'react'


const Navbar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body  fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
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
