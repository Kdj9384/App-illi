import './Project.css';
import Header from './Header.js'
import Footer from './Footer.js'
import React, { Component } from 'react';

import prj1 from './images/prj1.png'
import prj2 from './images/prj2.png'

class Body extends Component {
  render() {
    return (
      <div className="App-body">
          <div className="Body-title">
            <p>일리소프트 교육 </p>
            <p>AR 콘텐츠를 통한 언플러그드 학습</p>
          </div>
          <div className="Body-content"> 
            <div className="content-1">
              <div className="content-img">
                <img src={prj2} alt=" "></img>
              </div>

              <div className="content-text">
                <p className="cnt-title">
                    워키와 함께하는 <br></br> 
                    코딩 교실
                </p>
                <p className="cnt-cnt">
                  <p>프로그래밍 기술을</p>
                  <p>간단하고 재미있게 로봇과 함께 학습합니다.</p>
                </p>
              </div>
            </div>

            <div className="content-2">
              <div className="content-img">
                <img src={prj1} alt=" "></img>
              </div>

              <div className="content-text">
                <p className="cnt-title">
                  튀어나와요!<br></br> 
                  스티커북
                </p>
                <p className="cnt-cnt">
                  <p>AR기술을 통해</p>                  
                  <p>위험하고</p>
                  <p>실제로 하기 어려운 실험을 진행합니다.</p>
                </p>
              </div>
            </div>

          </div>
      </div>
    )
  }
}


function Project() {
  return (
    <div className="App">

      <Header></Header>

      <Body></Body>

      <Footer></Footer>

    </div>
  );
}

export default Project;
