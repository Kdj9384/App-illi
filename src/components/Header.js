import React, { Component } from 'react';
import illi_logo from '../images/illi_logo.png';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Link to="/">
                    <img src={illi_logo} className="illi_logo" alt="Illi Logo"/>
                </Link>
                <nav  className="Header-nav"> 
                    <ul>
                        <li className="font-Gmarket"> 
                            <Link to="/Project">Project</Link>
                        </li>
                        <li className="font-Gmarket"> 
                            <Link to="/About">About</Link>
                        </li>
                        <li className="font-Gmarket"> 
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;

