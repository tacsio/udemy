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
  showPersons: false,
  authenticated: false
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

  handleLogin = () => {
    const authenticated = !this.state.authenticated;
    this.setState({ authenticated});
  }

  render() {
    let persons = null;
    
    if(this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            authenticated={this.state.authenticated} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPerson={this.state.showPersons} 
          login={this.handleLogin}
          logged={this.state.authenticated}/>
        { persons }
      </div>
    );
  }
}

export default App;
