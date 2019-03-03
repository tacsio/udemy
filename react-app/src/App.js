import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {
 
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Jhon Silver", age: 25 },
      { name: "James Flint", age: 30 },
      { name: "Benjamim Hornigold", age: 45 }
    ]
  });

  const [otherState, setOtherState] = useState("Some other value");

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Charles Vayne", age: 30 },
        { name: "James Flint", age: 30 },
        { name: "Benjamim Hornigold", age: 45 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is realy working</p>
      <button onClick={switchNameHandler}>Switch Name</button>    
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Sail</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default app;


