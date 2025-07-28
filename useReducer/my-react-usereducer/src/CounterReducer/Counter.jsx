import React, { useReducer, useState } from "react";

//initial state
const initial = 0;

//define reducer function over here
function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

const Counter = () => {
  //const [count, setCount] = useState(0);
  console.log("useReducer()");
  //USE REDUCER
  // --> ARRAY(0)
  // --> Array f()
  //console.log(useReducer());
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <div>
      <div>Counter :{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
