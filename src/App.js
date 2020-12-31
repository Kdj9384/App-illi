import logo from './logo.svg';
import illi_logo from './illi_logo.jpg';
import './App.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={illi_logo} className="illi_logo" alt="Illi Logo"/>
        <nav  className="Header-nav">
          <ul>
            <li> Project </li>
            <li> About </li>
            <li> Contact </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <body className="App-body">
          <div className="Body-content"> 
          dd
          <br></br>
          </div>
      </body>
    )
  }
}

class Footer extends Component {
  render() {
    return (

      <footer className="App-footer">
        <p> 푸터 </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </footer>
    )
  }
}


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Body></Body>

      <Footer></Footer>

    </div>
  );
}

export default App;
