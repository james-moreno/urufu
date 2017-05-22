import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);

      this.state = {
        name: '',
        output: ''
      }
  }
  submitName(event) {
    event.preventDefault();
    console.log(this.refs.name.value);
    this.setState({output : this.refs.name.value})
    this.refs.name.value = '';

  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitName.bind(this)}>
          <input type="text" ref="name"/>
          <input type="submit" value="Submit"/>
        </form>
        <p>{this.state.output}</p>
      </div>
    )
  }
}

export default NameForm;
