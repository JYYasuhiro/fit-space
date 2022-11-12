import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Navbar from './Navbar';
import Menu from './Menu';


function App() {
  const [] = useState();
  const [] = useState();



  return (
    <div className="App">
      <div className ="navbar">
        <Navbar/>
        
        
      </div>
      
      <div className="card">
        <Menu/>
      </div>
    </div>
  )
}

export default App
