import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;