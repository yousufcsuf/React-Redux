import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterReducerObject from "./CounterObject/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CounterReducerObject />
      </div>
    </>
  );
}

export default App;
