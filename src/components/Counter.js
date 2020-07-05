import React, { Component } from 'react';


class Counter extends Component {
  render() {
    return (
      <div className="counter-number">{this.props.counter}</div>
    );
  }
}

export default Counter;