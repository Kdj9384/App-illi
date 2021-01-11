import React from "react"
import Footer from '../components/Footer'
import './About.css'
import '../components/Footer.css'

class Body extends React.Component {
  render() {
    return (
      <div className="About-body">
          <div className="About-body-title">
            <p className="title">About 일리소프트 </p>
            <p className="title_attach">일리소프트 현역</p>
          </div>
          <div className="About-body-content"> 
            <div className="txtbox">
              <p className="txtbox-title">강사 경력</p>
              <div className="txtbox-title_attach">
                - 2019 전국 어플리케이션 개발대회 수상 <br></br>
                - 국제 대학생 VR콘텐츠 제작 프로젝트 참여 <br></br>
                - 한양대학교 교수학습지원센터 온라인 강의 3D 게임제작 개발 총괄 <br></br>
                - Knowledge Factory Studio 게임제작과 VR/AR 환경개발 강의 총괄 <br></br>
              </div>

              <p className="txtbox-title">회사 연혁</p>
              <p className="txtbox-title_attach">
                5건 이상의 AR/VR/MR 외주용역 개발 수행 <br></br>
                각종 교육 진행 중
              </p>
            </div>
            <div className="bottomBox"></div>
          </div>
      </div>
    )
  }
}

class About extends React.Component {
    render () {
      return (
        <div className="App">
              
          <Body></Body>
    
          <Footer></Footer>

        </div>
      );
    }
  }
export default About;