import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    
    if(this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPerson={this.state.showPersons} />
        { persons }
      </div>
    );
  }
}

export default App;
