import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent';

class App extends Component {

  state = {
    fieldSize: 0,
    text: ''
  }

  inputChangeListener = (event) => {
    let text = event.target.value;
    let size = text.length;

    this.setState({fieldSize: size, text: text});
  }

  filterCharHandler = (char) => {
    const text = this.state.text;
    const regex = new RegExp(char, 'g');

    let filterdText = text.replace(regex, '');
    let size = filterdText.length;
    this.setState({text: filterdText, fieldSize: size});
  }

  render() {

    let inputField = null;
    let chars = [...new Set(this.state.text)];
    
    inputField = (
      <div>
        <input onChange={this.inputChangeListener} value={this.state.text} />
        <p>{this.state.fieldSize}</p>
        <ValidationComponent size={this.state.fieldSize}/>
        { chars.map(char => <CharComponent click={() => this.filterCharHandler(char) } letter={char} />)}
      </div>
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr/>

        <div> 
          <h3> Solution </h3>
          { inputField }
        </div>
      </div>
    );
  }
}

export default App;
