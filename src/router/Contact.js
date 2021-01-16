import React, {useState, useEffect } from 'react';
import '../components/Footer.css'
import './Contact.css'
import firebase from '../firebase';

import illi_logo from '../images/illi_logo.png'
import illi_logo2 from '../images/illi_logo2.png'

export default function Contact () {
  const [todoList, setTodoList] = useState();
  const [infoList, setInfoList] = useState();
  useEffect(() => {
      const todoRef = firebase.database().ref('MainTitle');
      todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for(let id in todos){
          todoList.push(todos[id]);
      }
      console.log(todoList);
      setTodoList(todoList);
  });
  }, []);
  useEffect(() => {
    const infoRef = firebase.database().ref('ContactInfo');
    infoRef.on('value', (snapshot) => {
    const infos = snapshot.val();
    const infoList = [];
    for(let id in infos){
      infoList.push(infos[id]);
    }
    console.log(infoList);
    setInfoList(infoList);
  });
  }, []);
  return (
    <div className="Contact-body">
        <div className="Contact-body-title">
          <p className="title">{todoList ? todoList[3].Title : ''} </p>
        </div>
        <div className="Contact-body-content"> 
          <div className="txtbox">
            <p className="txtbox-title">Contact</p>
            <div className="txtbox-title_attach">
              상호명 : {infoList ? infoList[0].Name : ''} <br></br>
              주소 : {infoList ? infoList[0].Address : ''}<br></br>
              문의 : {infoList ? infoList[0].ContactPerson : ''} <br></br>
              휴대폰 : {infoList ? infoList[0].HP : ''} <br></br>
              E-mail : {infoList ? infoList[0].EMail : ''} <br></br><br></br>
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

// class Contact extends React.Component {
//     render () {
//       return (
//         <div className="App">
              
//           <Body></Body>
    
//           <Footer></Footer>
    
//         </div>
//       );
//     }
//   }
// export default Contact;