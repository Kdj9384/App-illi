import React, { Component } from 'react';
import illi_logo from './images/illi_logo.png';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Project from './Project.js'
import About from './About.js'
import Contact from './Contact.js'
import App from './App.js'

class Header extends Component {
    render() {
      return (
        <Router>
            <header className="App-header">
                <Link to='/App' id='logo_a'>
                    <img src={illi_logo} className="illi_logo" alt="Illi Logo"/>
                </Link>
                <nav  className="Header-nav">
                    <ul>
                        <li className="font-Gmarket"> 
                            <Link to='/Project'>
                                Project
                            </Link> 
                        </li>
                        <li className="font-Gmarket"> 
                        
                            <Link to='/About'>
                                About
                            </Link> 
                        </li>
                        <li className="font-Gmarket"> 
                            <Link to='/Contact'>
                                Contact
                            </Link> 
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path="/App" component={App}></Route>
                <Route exact path="/Project" component={Project}></Route>
                <Route exact path="/About" component={About}></Route>
                <Route exact path="/Contact" component={Contact}></Route>
            
            </Switch>
        </Router>
      )
    }
}

export default Header;

