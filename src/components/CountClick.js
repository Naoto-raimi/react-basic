import React from "react";

const CountClick = ({ clickhundle, children }) => {
  console.log("clicked", children);
  return (
    <div>
      <button onClick={clickhundle}>{children}</button>
    </div>
  );
};

export default React.memo(CountClick);
