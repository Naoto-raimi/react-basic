import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "add_3":
      return currentState + 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Conut {count}</div>
      <button onClick={() => dispatch("add_1")}>ADD 1</button>
      <button onClick={() => dispatch("add_3")}>ADD 3</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
    </div>
  );
};

export default BasicReducer;
