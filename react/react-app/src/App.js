import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Jhon Silver", age: 25 },
      { id: 2, name: "James Flint", age: 30 },
      { id: 3, name: "Benjamim Hornigold", age: 45 }
    ],
  otherState: "Some other value",
  showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    
    const persons = [...this.state.persons];
    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //keeps immutability
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
                      key={person.id}
                      name={person.name}
                      age={person.age} 
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                      click={() => this.deletePersonHandler(index)}/> 
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is realy working</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>    
        { persons }
        
      </div>
    );
  }
}

export default App;
