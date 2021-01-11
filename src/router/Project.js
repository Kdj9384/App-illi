import React from 'react'
import Footer from '../components/Footer'
import './Project.css'

import prj1 from '../images/prj1.png'
import prj2 from '../images/prj2.png'
class Body extends React.Component {
    render() {
        return (
            <div className="Proj-body">
                <div className="Proj-body-title">
                    <p className="title">일리 소프트 교육</p>
                    <p className="title_attach">AR콘텐츠를 통한 언플러그드 학습</p>
                </div>
                <div className="Proj-body-content">
                    <div className="cntbox" >
                        <div className="cntbox-img">
                            <img src={prj2} alt="proj2"></img>
                        </div>
                        <div className="cntbox-text">
                            <p className="cntbox-title">
                                웡키와 함께하는 <br></br>
                                코딩 교실
                            </p>
                            <div className="cntbox-cnt">
                                <p>프로그래밍 기술을</p>
                                <p>간단하고 재미있게 로봇과 함께 학습합니다.</p>
                            </div>
                        </div>

                    </div>

                    <div className="cntbox-reverse">
                        <div className="cntbox-img">
                            <img src={prj1} alt="proj1"></img>
                        </div>
                        <div className="cntbox-text">
                            <p className="cntbox-title">
                                튀어나와요!<br></br> 
                                스티커북
                            </p>

                            <div className="cntbox-cnt">
                                <p>AR기술을 통해</p>                  
                                <p>위헙하고</p>
                                <p>실제로 하기 어려운 실험을 진행합니다.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
class Project extends React.Component {
    render() {
        return (
            <div className="App">
                <Body></Body>
                <Footer></Footer>
            </div>
        )
    }
}

export default Project;