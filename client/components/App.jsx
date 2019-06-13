import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  decrementHandler() {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>Counter: {counter}</p>
        <div>
          <button type="button" onClick={this.incrementHandler}>Increment</button>
          <button type="button" onClick={this.decrementHandler}>Decrement</button>
        </div>
      </div>

    );
  }
}
export default App;
