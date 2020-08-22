import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; 
import About from './About';

function App() {
  var dist = useState({});

  return <Router>
    <Navbar dist={ dist[0] } />
    <div className="currentApp container">
      <Route exact path="/">
        <Home distState={ dist } />
        <About distState={ dist } />
      </Route>
      <Route path="/photos"></Route>
      <Route path="/contact"></Route>
      <Route path="/about"></Route>
    </div>
  </Router>;
}

export default App;