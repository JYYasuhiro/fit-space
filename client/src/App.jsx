import React, { useState, useRef } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") //view is either menu or week?
  const [workout, setWorkout] = useState("");//sets which type of workout is desired.
  const [day, setDay] = useState(0); //sets day to day of week chosen in Week
//when a workout option is clicked, TWO states are changed, currentView and workout.
console.log("day is",day)
//"menu" is the default, then will switch currentView to "week" if back button is clicked.
const handleBackClick = () => {
  if(currentView === "menu") {
    setCurrentView("week")
  } else {
    setCurrentView("menu")
  }
}

const handleCurrentView = () => {
  //switches view from menu to week by clicking on a workout on menu
  if(currentView === "menu") {
    setCurrentView("week")
  }
  console.log("view is changed!")
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
          setWorkout={setWorkout}
          />
        ) : (
          <Week handleBackClick={handleBackClick}
          workout={workout}
          setDay={setDay}
          day={day}
          />
        )}
      </div>
    </div>
  );
};

export default App;
