import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './Message';

const initialState = {
  name: 'Captain BoneCrusher',
  message: 'Typescript is awesome!!'
}

type State = Readonly<typeof initialState>;


class App extends Component <any>{

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Message name= 'Lord Auden' message= 'This is an awesome message' />      
        </header>
      </div>
    );
  }
}
export default App;
