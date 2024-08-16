
import './App.css';
import Navbar from './Navbar/Navbar';

import Home from './Components/Home';
import Video from './Components/Video';
import {Route,Routes,} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Video/:categoryId/:videoId" element={<Video/>}/>
       </Routes>
      
   </div>
  );
}

export default App;
