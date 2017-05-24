import React, { Component } from 'react';

class NameForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', output: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name);
    this.setState({output : this.state.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
        <p>{this.state.output}</p>
      </div>
    )
  }
}

export default NameForm;
