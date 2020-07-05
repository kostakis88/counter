import React from 'react';

function ActionButton(props) {
  const { action } = props;
  const symbol =  action > 0 ? '+' : '';
  const number = symbol + action;

  return (
    <div className="small-6">
      <button className="action-button" onClick={props.onClick}>{number}</button>
    </div>
  );
}

export default ActionButton;