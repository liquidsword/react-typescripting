import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //tuple
    let aTuple: [string, number] = ['Auden', 44]

    //enum
    enum Codes {first = 1, second= 2};

    //any
    let firstName: any = 'Earlin'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstName} is of { typeof firstName} type!
          </p>       
        </header>
      </div>
    );
  }
}
export default App;
