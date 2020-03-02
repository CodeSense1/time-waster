import React, { useState } from 'react';
import './App.css';



function App() {

  const [waste, setWaste] = useState(0)
  const [wasting, setWasting] = useState(false)


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

  const startTimer = () => {
    setWasting(true)
  }

  const stopTimer = () => {
    setWasting(false)
  }

  setInterval(() => {
    if (wasting) {
      setWaste(waste + 1)
    }
  }, 1000)

  return (
    <div className="App">

      <h4>Timewaster</h4>

      <button onClick={startTimer}>start wasting</button>
      <button onClick={stopTimer}>stop wasting</button>
      <p>{waste} min</p>
    </div>
  );
}

export default App;
