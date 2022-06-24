//아래 Component import 해야 에러 발생하지 않음
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//함수방식으로 구현된 것 class 방식으로 교체
class App extends Component{
  render(){
    return (
      <div className="App">
        Hello, React!!
      </div>
    );
  }
}

export default App;
