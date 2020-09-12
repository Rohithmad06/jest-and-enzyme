import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const buttonClickedHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>The current count is {count}</h1>
      <button onClick={buttonClickedHandler}>Click me</button>
    </div>
  );
};
export default Counter;
