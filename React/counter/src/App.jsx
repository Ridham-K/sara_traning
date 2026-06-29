import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("Render");

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;