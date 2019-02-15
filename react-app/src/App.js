import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working</p>         
        <Person name="Jhon Silver" age="25"/>
        <Person name="Cap. Flint" age="30">My Hobbies: Sailing</Person>
        <Person name="Cap. Hornigold" age="35"/>
      </div>
    );
  }
}

export default App;
