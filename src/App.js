
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import VideoPage from './Components/VideoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/video/:videoId" component={VideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
