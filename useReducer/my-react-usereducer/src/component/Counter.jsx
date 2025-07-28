import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((num) => num + 1);
  }
  function handleDecrement() {
    setCount((num) => num - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <div>Counter :{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
