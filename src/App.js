import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p> 헤더 </p>

        <div className="logo-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>

        <div className="others-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>

      </header>

      <body className="App-body">
          <p>본문</p>
      </body>

      <footer className="App-footer">
        <p> 푸터 </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </footer>

    </div>
  );
}

export default App;
