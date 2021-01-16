import React, {useState, useEffect } from 'react';
import EducationBox from '../components/EducationBox';
import './Project.css'
import firebase from '../firebase';


export default function Project () {
    const [todoList, setTodoList] = useState();
    const [educationList, setProjectList] = useState();
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
      const educationRef = firebase.database().ref('Education');
      educationRef.on('value', (snapshot) => {
      const educations = snapshot.val();
      const educationList = [];
      for(let id in educations){
        educationList.push(educations[id]);
      }
      console.log(educationList);
      setProjectList(educationList);
    });
    }, []);
    return (
        <div className="Proj-body">
            <div className="Proj-body-title">
                <p className="title">{todoList ? todoList[2].Title:''}</p>
                <p className="title_attach">{todoList ? todoList[2].Title:''}</p>
            </div>
            <div className="Proj-body-content">
                {educationList ? educationList.map((education, index) => <EducationBox Education={education} key={index}/>) : ''}

            </div>
        </div>
    )
}
// class Project extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Body></Body>
//                 <Footer></Footer>
//             </div>
//         )
//     }
// }

// export default Project;