import './Home.css';
import Footer from '../components/Footer.js'
import React, { Component } from 'react';

import content1 from '../images/content1.png'
import content2 from '../images/content2.png'

class Body extends Component {
  render() {
    return (
      <div className="App-body">
          <div className="Body-title">
            <p id="title1">인터랙티브 교육의 미래 </p>
            <p id="title2"> iLLi </p>
            <p id="title3">AR/VR 콘텐츠 인터랙티브 교육 <br></br> 콘텐츠 제작 & 수업운영</p>
          </div>
          <div className="Body-content"> 
            <div className="content-1">
              <div className="content-img">
                <img src={content1} alt=" "></img>
              </div>

              <div className="content-text">
                <p className="cnt-title">AR콘텐츠를 통한<br></br> Unplugged 학습</p>
                <p className="cnt-cnt">
                  <p>코딩 기초 지식, 진로, 기초과학등을</p>
                  <p>자체 개발한 AR 컨텐츠로 학습합니다.</p>
                  <p>추천연령 : 약 12세 전후(초, 중학생 가능)</p>
                  <button>교육 세부 내용</button>
                </p>
              </div>
            </div>

            <div className="content-2">
              <div className="content-img">
                <img src={content2} alt=" "></img>
              </div>

              <div className="content-text">
                <p className="cnt-title">
                  중급자 대상<br></br> 
                  AR/VR 콘텐츠 제작 강의
                </p>
                <p className="cnt-cnt">
                  <p>프로그래밍에 관한 기본지식이 필요합니다.</p>                  
                  <p>온라인 실시간, 오프라인, 녹화강의 모두 가능합니다.</p>
                  <p>추천연령 : 15세 이상</p>
                  <button>교육 세부 내용</button>
                </p>
              </div>
            </div>

            <div className="content-1">
              <div className="content-img">
                <img src={content1} alt=" "></img>
              </div>

              <div className="content-text">
                <p className="cnt-title">
                  온라인 게임 개발대회<br></br> 
                  진행 및 운영
                </p>
                <p className="cnt-cnt">
                  <p>게임 개발 대회행사를 온라인으로 진행합니다.</p>
                  <p>총 3회 개최하였으며 한양대학교에서 주관하였습니다.</p>
                  <p>이외 각종 행사진행 경력을 보유하고 있습니다.</p>
                  <button>대회 사이트 보기</button>
                </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


class App extends Component {
  render () {
    return (
      <div className="App">
          
        <Body></Body>
  
        <Footer></Footer>
  
      </div>
    );
  }
}

export default App;
