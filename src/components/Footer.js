import foo_icon1 from '../images/footer_icon1.png';
import foo_icon2 from '../images/footer_icon2.png';
import foo_icon3 from '../images/footer_icon3.png';
import React, { Component } from 'react';

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

export default Footer;