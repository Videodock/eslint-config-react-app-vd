import React, { Component } from 'react';

class ReactComponent extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <h2>Value: {value}</h2>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default ReactComponent;
