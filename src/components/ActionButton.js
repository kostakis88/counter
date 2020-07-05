import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    const { action } = this.props;
    const symbol =  action > 0 ? '+' : '';
    const number = symbol + action;

    return (
      <div className="small-6">
        <button className="action-button" onClick={this.props.onClick}>{number}</button>
      </div>
    );
  }
}

export default ActionButton;