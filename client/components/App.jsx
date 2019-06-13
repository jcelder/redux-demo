import React from 'react';

const App = (props) => (
  <div>
        <p>Counter: {props.counter}</p>
        <div>
          <button type="button" onClick={props.incrementStuff}>Increment</button>
          <button type="button" onClick={props.decrementStuff}>Decrement</button>
        </div>
      </div>

)
export default App;
