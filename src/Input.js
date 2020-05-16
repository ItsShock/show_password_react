import React from 'react';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      inputType: "password"
    }
  }

  setInputType = () => {
    let { inputType } = this.state;
    if (inputType === 'password') { inputType = "text" }
    else { inputType = "password" }
    this.setState({inputType})
  }

  render() {
    return <div>
      <input type={this.state.inputType}></input><button onClick={this.setInputType}>X</button>
    </div>
  }
}

export default Input;
