import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Feed from './Feed/Feed';
import './Home.css';


const Home = () => {
    const [category,setcategory]=useState(0)
  return (
    <>
      <Sidebar category={category} setcategory={setcategory}/>
      <div className='container'> 
        <Feed category={category} setcategory={setcategory}/>
      </div>
    </>
  )
}

export default Home;
