import React, { Component } from 'react';
import './App.css';
import  NameForm from './components/NameForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Vote Note</h1>
        </div>
        <NameForm />
        <p id="output"></p>
      </div>
    );
  }
}

export default App;
