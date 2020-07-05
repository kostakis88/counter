import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <button className="reset" onClick={this.props.onClick}>Reset</button>
    );
  }
}

export default Reset;