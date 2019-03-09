import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Jhon Silver", age: 25 },
      { name: "James Flint", age: 30 },
      { name: "Benjamim Hornigold", age: 45 }
    ],
  otherState: "Some other value",
  showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "James Flint", age: 30 },
        { name: "Benjamim Hornigold", age: 55 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Jhon Silver", age: 25 },
        { name: event.target.value, age: 30 },
        { name: "Benjamim Hornigold", age: 55 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>    
        {
          this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={() => this.switchNameHandler('Captain Vayne')}
              changed={this.nameChangedHandler}>My Hobbies: Sail</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
        }
        
      </div>
    );
  }
}

export default App;
