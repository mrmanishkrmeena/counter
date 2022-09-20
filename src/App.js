import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function Counter(){
  const [count,setCount] = useState(0);
  return (
    <>
    <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={()=> setCount(count+1)}>Incr</button>
      <button onClick={()=> setCount(count-1)}>Decr</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      <button onClick={()=> setCount(-1 * count)}>Reverse Sign</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
