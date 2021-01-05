import illi_logo from './illi_logo.png';
import back_img1 from './back_img.png';
import foo_icon1 from './footer_icon1.png';
import foo_icon2 from './footer_icon2.png';
import foo_icon3 from './footer_icon3.png';

import './App.css';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={illi_logo} className="illi_logo" alt="Illi Logo"/>
        <nav  className="Header-nav">
          <ul>
            <li> Project </li>
            <li> About </li>
            <li> Contact </li>
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
          <div className="Body-header">
            <img src={back_img1} alt="background"/>
          </div>
          <div className="Body-title">
            일리소프트 교육
            AR 콘텐츠를 통한 언플러그드 학습
          </div>
          <div className="Body-content"> 
           dksjf<br></br>kdsljfk<br></br>dslfjd<br></br>ksjalsk<br></br>
           djfkd<br></br>lsajfkdl<br></br>sajfkdsal
           <br></br>
           fdksa<br></br>jfldks<br></br>jalfkd<br></br>jfklajfdkls<br></br>alfjdkslafjdkslafjdksaf
           fdjk<br></br>ajv<br></br>fk<br></br>dslajfkds<br></br>alfjdksal<br></br>fjdkslajfkdlsajfkdlsajfkdlas
           fj<br></br>dksalfjdksajfdlskajfkdalfjdksalfjdlksjafldkajfdklasjf
           d<br></br><br></br><br></br><br></br><br></br>sjfkdsljfkdslfjdksjalskdjfkdlsajfkdlsajfkdsal
           fdksajfldksjalfkdjfklajfdklsalfjdkslafjdkslafjdksaf
           fdj<br></br><br></br>kajfkdslajfkdsalfjdksa<br></br>lfjdkslajfkdlsajfkdlsajfkdlas
           fjdksalfjdksajfdlskajfkdalfjdks<br></br>alfjdlksjafldkajfdklasjf
           dksjfkdsljfkdslfjdksjalskdjfkdlsajfkdlsajfkdsal
           fdksajfldksjalfk<br></br>djfklajfdklsalfjdkslafjdkslafjdksaf
           fdjkajfkdslajfkdsalfjdksalfjdkslajfkdlsajfkdlsajfkdlas
           fjdksa<br></br>lfjdksajf<br></br>dlskajfkdalfjdksalf<br></br>jdlksjafldkajfdklasjf
           <br></br><br></br><br></br><br></br><br></br><br></br>
           <br></br><br></br><br></br><br></br><br></br>
           <br></br><br></br><br></br><br></br>
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
            <p> (주) 일리소프트 (734 - 81 - 01722) </p>
            <p> 안산시 상록구 한양대학로 55(사동, 창업센터) (5공학관 지하) </p>
            <p> 대표 안호준  HP : 010 - 4345 - 7940 </p>
            <p> illisoftofficial@gmail.com </p>
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
