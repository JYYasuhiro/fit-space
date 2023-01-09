import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import CustomMenu from './routes/CustomMenu';
import Sidenav from './components/Sidenav.jsx';
import AllWorkouts from './routes/AllWorkouts';
function App() {
  return (
    <div className="App">
      <nav>this is where the nav bar goes</nav>
      <Sidenav/>
      <p>this is App</p>

      <Routes>
        {/* <Route path = {'/home'} element = {<HomePage/>}/> */}
        <Route path = {'/allWorkouts'} element = {<AllWorkouts/>}/>
        <Route path = {'/customMenu'} element = {<CustomMenu/>}/>
      </Routes>
    </div>
  )
}

export default App
