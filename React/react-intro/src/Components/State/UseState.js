import { useState } from "react";
const UseState = () => {
  let initialValue = 0;
  const [num, setNum] = useState(initialValue);

  const decrement = () => {
    setNum((num) => num - 1);
  };

  const increment = () => {
    setNum((num) => num + 1);
  };
  const reset = () => {
    setNum((num) => (num = 0));
  };

  return (
    <div className="state">
      <h1 className="number">{num}</h1>
      <button onClick={decrement}>Decrement</button>
      {"  "}
      <button onClick={reset}>Reset</button>
      {"  "}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default UseState;
