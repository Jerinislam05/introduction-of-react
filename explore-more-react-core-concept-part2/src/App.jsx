import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';

function App() {
   
  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button clicked 2');
  }

  const addToFive = (num) => {
    alert(num + 5)
  };

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>Click3</button>
      <button onClick={() => addToFive(3)}>Click4</button>
      
    </>
  )
}

export default App
