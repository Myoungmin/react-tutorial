//아래 Component import 해야 에러 발생하지 않음
import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
