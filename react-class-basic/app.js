import React, { useState } from "react";
// import "./App.css";
const App = () => {
  let [number, setNumber] = useState(10);
  const changeCount = (action) => {
    if (action == "inc") {
      if (number >= 10) {
        alert("10 is max number");
      }
      setNumber(number + 1);
    } else {
      if (number <= 1) {
        alert("negative number");
      }
      setNumber(number - 1);
    }
  };

  return (
    <div className="login">
      <button onClick={() => changeCount("inc")}> + </button>
      {number}
      <button onClick={() => changeCount("dec")}> - </button>
    </div>
  );
};

export default App;
