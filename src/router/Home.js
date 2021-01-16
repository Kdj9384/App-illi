import './Home.css';
import React, {useState, useEffect } from 'react';
import firebase from '../firebase';
import ContentBox from '../components/ContentBox';
import '../components/Footer.css';


export default function Body () {
    const [todoList, setTodoList] = useState();
    const [projectList, setProjectList] = useState();
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
      const projectRef = firebase.database().ref('Project');
      projectRef.on('value', (snapshot) => {
      const projects = snapshot.val();
      const projectList = [];
      for(let id in projects){
        projectList.push(projects[id]);
      }
      console.log(projectList);
      setProjectList(projectList);
  });
  }, []);
    return (
      
      <div className="Home-body">
        <div className="Home-body-title">
          <p className="title">{todoList ? todoList[0].Title:''}</p>
          <p className="title_big">{todoList ? todoList[0].Keyword:''}</p>
          <p className="title_attach">{todoList ? todoList[0].Subtitle:''}</p>
        </div>
        <div className="Home-body-content"> 
          {projectList ? projectList.map((project, index) => <ContentBox Project={project} key={index}/>) : ''}
        </div>
      </div>
    )
}


//  class App extends Component {
//    render () {
//      return (
//        <div className="App">
          
//          <Body></Body>
//          <Footer></Footer>
  
//        </div>
//      );
//    }
//  }

//  export default App;
