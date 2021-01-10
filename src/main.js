import illi_logo from './images/illi_logo.png';
import foo_icon1 from './images/footer_icon1.png';
import foo_icon2 from './images/footer_icon2.png';
import foo_icon3 from './images/footer_icon3.png';

import './App.css';
import React, { Component } from 'react';

import { Link, Route, BrowserRouter as Router } from "react-router-dom"



class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={illi_logo} className="illi_logo" alt="Illi Logo"/>
        <nav  className="Header-nav">
          <ul>
            <li className="font-Gmarket"> Project </li>
            <li className="font-Gmarket"> <a href="./About" >About</a> </li>
            <li className="font-Gmarket"> <a href="/" >Contact</a> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <div className="App-body">
          <div className="Body-title">
            <p>일리소프트 교육 </p>
            <p>AR 콘텐츠를 통한 언플러그드 학습</p>
          </div>
          <div className="Body-content"> 
          </div>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (

      <footer className="App-footer">
        <div className="footer-layout">
          <div className="footer-text">
            <p className="font-Gmarket"> (주) 일리소프트 (734 - 81 - 01722) </p>
            <p className="font-Gmarket"> 안산시 상록구 한양대학로 55(사동, 창업센터) (5공학관 지하) </p>
            <p className="font-Gmarket"> 대표 안호준  HP : 010 - 4345 - 7940 </p>
            <p className="font-Gmarket"> illisoftofficial@gmail.com </p>
          </div>
          <div className="footer-image">
            <a href=" "><img src={foo_icon1} alt="call"/></a>
            <a href=" "><img src={foo_icon2} alt="msg"/></a>
            <a href=" "><img src={foo_icon3} alt="etc"/></a>
          </div>

        </div>

      </footer>
    )
  }
}


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Body></Body>

      <Footer></Footer>

    </div>
  );
}

export default App;
export {Header, Footer};