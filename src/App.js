import React, { useReducer, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
// import B from "./components/B";
// import BasicReducer from "./components/BasicReducer";
// import CompB from "./components/CompB";
// import Memo from "./components/Memo";
import CountDisplay from "./components/CountDisplay";
import CountClick from "./components/CountClick";

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, []);

  const AddCount2 = useCallback(() => {
    setCount2((prevCount2) => prevCount2 + 1);
  }, []);
  return (
    <AppContext.Provider
      value={{ countProvider: count, dispatchProvider: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <BasicReducer /> */}
          {/* <h3>Count {count}</h3>
          <CompB /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1} />
          <CountClick clickhundle={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick clickhundle={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
