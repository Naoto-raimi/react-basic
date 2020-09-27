import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const CompC = () => {
  const { dispatchProvider } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => dispatchProvider("add_1")}>ADD 1</button>
    </div>
  );
};

export default CompC;
