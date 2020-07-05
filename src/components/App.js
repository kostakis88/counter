import React, { Component } from 'react';
import { Data } from './Data';
import ActionButton from './ActionButton'
import Counter from './Counter';
import Reset from './Reset';

class App extends Component {

  state = {
    counter: 0
  };

  handleActionClick = (buttonAction) => {
    this.setState({
      counter: this.state.counter + buttonAction
    });
  }

  handleResetClick = () => {
    this.setState({
      counter: 0
    });
  }

  render() {
    return (
      <div className="grid-container">
        <div className="control-panel">
          <div className="grid-x">
            {Data.map(button => {
              return (
                <ActionButton key={button.id} action={button.action} onClick={() => this.handleActionClick(button.action)}/>
              );
            })}
          </div>
        </div>
        <Counter counter={this.state.counter} />
        <Reset onClick={this.handleResetClick} />
      </div>
    );
  }
}

export default App;