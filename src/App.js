import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <p> 헤더 </p>
      </header>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <body className="App-body">
          <p>본문</p>
      </body>
    )
  }
}

class Footer extends Component {
  render() {
    return (

      <footer className="App-footer">
        <p> 푸터 </p>
        <img src={logo} className="App-logo" alt="logo" />
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
