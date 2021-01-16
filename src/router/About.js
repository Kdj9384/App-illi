import React, {useState, useEffect } from 'react';
import './About.css'
import '../components/Footer.css'
import firebase from '../firebase';


export default function About () {
    const [todoList, setTodoList] = useState();
    const [infoList, setInfoList] = useState();
    const [companyList, setCompanyList] = useState();
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
      const infoRef = firebase.database().ref('TeacherSpec');
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
    useEffect(() => {
      const companyRef = firebase.database().ref('CompanySpec');
      companyRef.on('value', (snapshot) => {
      const companys = snapshot.val();
      const companyList = [];
      for(let id in companys){
        companyList.push(companys[id]);
      }
      console.log(companyList);
      setCompanyList(companyList);
    });
    }, []);
    return (
      <div className="About-body">
          <div className="About-body-title">
            <p className="title">{todoList ? todoList[1].Title : ''} </p>
            <p className="title_attach">{todoList ? todoList[1].Subtitle : ''}</p>
          </div>
          <div className="About-body-content"> 
            <div className="txtbox">
              <p className="txtbox-title">강사 경력</p>
              <div className="txtbox-title_attach">
                {infoList ? infoList.map((teacher, index) => <p key={index} >- {teacher}<br></br></p>) : ''}
              </div>

              <p className="txtbox-title">회사 연혁</p>
              <p className="txtbox-title_attach">
                {companyList ? companyList.map((company, index) => <p key={index}>- {company}<br></br></p>) : ''}
              </p>
            </div>
            <div className="bottomBox"></div>
          </div>
      </div>
    )
  }

// class About extends React.Component {
//     render () {
//       return (
//         <div className="App">
              
//           <Body></Body>
    
//           <Footer></Footer>

//         </div>
//       );
//     }
//   }
// export default About;