import React, { useState, useRef } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";

const App = () => {
  const [currentView, setCurrentView] = useState<string>("menu") //view is either menu or week?
  // const [workout, setWorkout] = useState<string>(""); 

const handleSetWorkout = () => {
  //sets the state of workout to be either push-pull, bro-split, or calisthenics, as a string
  //pass this down as a prop, so that in Week component, the fetch will know which workout to retrieve.
}

console.log("current view", currentView);
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="back-button">
        {currentView === "menu" ? (
          <Menu handleBackClick={()=>{setCurrentView("week")}} />
        ) : (
          <Week handleBackClick={()=>{setCurrentView("menu")}} />
        )}
      </div>
    </div>
  );
};

export default App;
