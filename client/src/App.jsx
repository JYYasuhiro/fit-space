import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") //view is either menu or week?
  const [workout, setWorkout] = useState("");  //sets which type of workout is desired.
//when a workout option is clicked, TWO states are changed, currentView and workout

const handleSetWorkout = (event) => {
  //sets the state of workout to be either "push-pull", "bro-split", or "calisthenics", as a string
  
  console.log(event.target)
  return event.target;
  //pass this down as a prop, so that in Week component, the fetch will know which workout to retrieve.
}

const handleBackClick = () => {
  if(currentView === "menu") {
    setCurrentView("week")
  } else {
    setCurrentView("menu")
  }
}

const handleCurrentView = () => {
  //switches view from menu to week by clicking on a workout on menu
}

console.log("current view", currentView);
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="container">
        {currentView === "menu" ? (
          <Menu 
          handleBackClick={handleBackClick}
          handleCurrentView={handleCurrentView}
          handleSetWorkout={handleSetWorkout}
          />
        ) : (
          <Week handleBackClick={handleBackClick}/>
        )}
      </div>
    </div>
  );
};

export default App;
