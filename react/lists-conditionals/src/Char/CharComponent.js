import React, { Component } from 'react'
import './CharComponent.css'

export class CharComponent extends Component {

  render() {
    let charBox = null;
    const letter = this.props.letter;

    if(letter != null) {
      charBox = (<div>{letter}</div>)
    }


    return (
      <div onClick={this.props.click} className="Char">
        { charBox }
      </div>
    )
  }
}

export default CharComponent