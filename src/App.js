import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
// import B from "./components/B";
import BasicReducer from "./components/BasicReducer";
import CompB from "./components/CompB";
import Memo from "./components/Memo";

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
          <Memo />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
