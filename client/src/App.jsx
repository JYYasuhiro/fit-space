import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [] = useState();



  return (
    <div className="App">
      <div className ="navbar">
        <Navbar/>
        <h1>Fit Space</h1>
        
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card"></div>
    </div>
  )
}

export default App
