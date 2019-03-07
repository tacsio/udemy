import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';

class App extends Component {

  state ={
    username: 'Tolkien'
  }

  changeStateHandler = (event) => {

    let newValue = event.target.value;
    if(event.target.value ===  '') {
      newValue = 'Tolkien';
    } 

    this.setState({
      username: newValue
    });
    
  }


  render() {
    return (
      <div className="App">
        <ol>
          <li className="done">Create TWO new components: UserInput and UserOutput</li>
          <li className="done">UserInput should hold an input element, UserOutput two paragraphs</li>
          <li className="done">Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li className="done">Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li className="done">Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li className="done">Add a method to manipulate the state (=> an event-handler method)</li>
          <li className="done">Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li className="done">Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li className="done">Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li className="done">Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <div>
          <h3> Result </h3>
          <UserInput 
            onChange={this.changeStateHandler} 
            value={this.state.username}/>
          <UserOutput 
            first="The leaves were long, the grass was green" 
            second="The hemlock-umbels tall and fair"
            username={this.state.username}/>
        </div>
      </div>
    );
  }
}

export default App;
