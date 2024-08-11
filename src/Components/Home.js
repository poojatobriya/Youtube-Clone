import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Feed from './Feed/Feed';
import './Home.css';


const Home = () => {
  return (
    <>
      <Sidebar/>
      <div className='container'> 
        <Feed/>
      </div>
    </>
  )
}

export default Home;
