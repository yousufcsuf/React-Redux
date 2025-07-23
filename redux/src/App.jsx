import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PizzaBox from "./components/redux/PizzaBox";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to Redux</h1>
      <PizzaBox />
    </>
  );
}

export default App;
