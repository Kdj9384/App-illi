import React from "react"
import Footer from '../components/Footer'

import illi_logo from '../images/illi_logo.png'
import illi_logo2 from '../images/illi_logo2.png'

import '../components/Footer.css'
import './Contact.css'
class Body extends React.Component {
  render() {
    return (
      <div className="Contact-body">
          <div className="Contact-body-title">
            <p className="title">Contact 일리소프트 </p>
          </div>
          <div className="Contact-body-content"> 
            <div className="txtbox">
              <p className="txtbox-title">Contact</p>
              <div className="txtbox-title_attach">
                상호명 : (주) 일리소프트 <br></br>
                주소 : 경기도 안산시 상록구 한양대학로 55 (사동, 창업센터) <br></br>
                      (5공학관 지하 1층)
                문의 : 안호준 (대표) <br></br>
                휴대폰 : 010-4345-7940 <br></br>
                E-mail : illisoftofficial@gmail.com <br></br><br></br>
                로고 : <br></br>

                <div className="Contact-bottom-logos">
                  <img src={illi_logo} alt="logo1" id="bottom-logo1"></img>
                  <img src={illi_logo2} alt="logo2" id="bottom-logo2"></img>
                </div>
              </div>
              <div className="bottomBox"></div>
            </div>
          </div>
      </div>
    )
  }
}

class Contact extends React.Component {
    render () {
      return (
        <div className="App">
              
          <Body></Body>
    
          <Footer></Footer>
    
        </div>
      );
    }
  }
export default Contact;