import React, { useState } from 'react';
import './App.css';



function App() {

  const [waste, setWaste] = useState(0)


  const handleClick = (e) => {
    setWaste(waste + 10)
    console.log(waste)
  }

  const handlenegative = (e) => {
    setWaste(waste - 10)
    console.log(waste)

  }

  const getwastedTime = (waste) => {
    return waste
  }

  return (
    <div className="App">

      <h4>Timewaster</h4>

      <button onClick={handleClick.bind(setWaste, waste)}>Waste time 10 min</button>
      <button onClick={handlenegative.bind(setWaste, waste)}>NOT Waste time 10 min</button>
      <p>{getwastedTime(waste)} min</p>
    </div>
  );
}

export default App;
