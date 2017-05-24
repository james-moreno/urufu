import React, { Component } from 'react';
var request = require('superagent');

class NameForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', output: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.ajaxTest = function(zip){
      request.get('https://congress.api.sunlightfoundation.com/districts/locate?zip='+zip)
        .end((error, response) => {
          if (!error && response) {
            this.setState({output: response.body.results[0].state})
            console.log(response.body.results)
          } else {
            console.log('There was an error fetching your congressman', error);
          }
        }
      );
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.ajaxTest(this.state.value);
    event.preventDefault();
    this.setState({value: ''});
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
