import React, { Component } from 'react';
import ActionButton from './ActionButton';
import { Data } from './Data';

class ControlPanel extends Component {
  render() {
    return (
      <div className="control-panel">
        <div className="grid-x">
          {Data.map(item => {
            return (
              <ActionButton key={item.id} action={item.action} />
              );
          })}
        </div>
      </div>
    );
  }
}

export default ControlPanel;