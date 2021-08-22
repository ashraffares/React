import React, { useState } from "react";

const State = () => {
  const [count, setCount ] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return
    }
    setCount(count - 1)
  }
  
  return (
    <div className="State">
      <h1>{ count }</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={ decrement }>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default State;
