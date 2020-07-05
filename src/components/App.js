import React, { Component } from 'react';
import ControlPanel from './ControlPanel'
import Counter from './Counter';
import Reset from './Reset';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <ControlPanel />
        <Counter />
        <Reset />
      </div>
    );
  }
}

export default App;