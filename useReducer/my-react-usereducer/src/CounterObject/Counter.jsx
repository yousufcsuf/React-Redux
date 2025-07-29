import React, { useReducer, useState } from "react";

//initial state
const InitialState = {
  counter: 0,
};

//define reducer function over here
function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };
    case "decrement":
      return { counter: state.counter - action.payload };
    case "reset":
      return { ...state, counter: 0 };
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
  const [count, dispatch] = useReducer(reducer, InitialState);

  return (
    <div>
      <h1>Complex Object handler</h1>
      <div>Counter: {count.counter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
