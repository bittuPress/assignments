import React, { useState } from "react";
// import "./App.css";
const App = () => {
  const [arr, setArr] = useState([3, 6, 7, 8, 9]);
  const [inputVal, setInputVal] = useState();
  const removeLastItem = () => {
    const tempArray = [...arr]; //using spread operator to copy an array
    tempArray.pop(); //remove last item from copied array
    setArr(tempArray);
  };
  const addLastItem = () => {
    const tempArray = [...arr]; //using spread operator to copy an array
    tempArray.push(inputVal); //remove last item from copied array
    setArr(tempArray);
  };
  return (
    <div className="App">
      {arr.map((item) => {
        return <li>{item}</li>;
      })}

      <button onClick={removeLastItem}>pop</button>

      <div>
        <input
          value={inputVal}
          type="number"
          placeholder="enter number"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={addLastItem} style={{ backgroundColor: "yellow" }}>
          Add Number
        </button>
      </div>
    </div>
  );
};

export default App;
