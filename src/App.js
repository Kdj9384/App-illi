import React from 'react';
import {Route, HashRouter as Router} from 'react-router-dom'

import Home from './router/Home'
import Project from './router/Project'
import About from './router/About'
import Contact from './router/Contact'
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/" component={Home}>
      </Route>
      <Route path="/Project" component={Project}>
      </Route>
      <Route path="/About" component={About}>
      </Route>
      <Route path="/Contact" component={Contact}>
      </Route>
    </Router>
  )
}

export default App;
