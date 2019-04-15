import React, { Component } from 'react'

export class ValidationComponent extends Component {
  
  render() {
    let validationText = null;
    let textSize = this.props.size;

    if(textSize < 5) {
      validationText = "Text too short"
    } else if(textSize > 20) {
      validationText = "Text too long"
    }

    return (
      <div>
        <p>{validationText}</p>
      </div>
    )
  }
}

export default ValidationComponent