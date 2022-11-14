import React, { useState, useRef } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";
import Workout from "./Workout";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") //view is either menu or week
  const [workout, setWorkout] = useState("");//sets which type of workout is desired. or workout
  const [day, setDay] = useState(""); //sets day to day of week chosen in Week
//when a workout option is clicked, TWO states are changed, currentView and workout.
console.log("day is", day);
console.log("current view", currentView);
console.log("chosen workout is:", workout);
//"menu" is the default, then will switch currentView to "week" if back button is clicked.


//switches view from menu to week by clicking on a workout on menu
const handleCurrentView = () => {
  if(currentView === "workout") {
    setCurrentView("week") 
 } else if(currentView === "week") {
    setCurrentView("menu")
 } else {
  setCurrentView("week")
 }
}


  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="container">
        {currentView === "menu" ? (
          <Menu 
          handleCurrentView={()=>setCurrentView("week")}
          setWorkout={setWorkout}
          />
        ) : (
          day === "" ? (
          <Week 
          handleBackClick={()=>setCurrentView("menu")} 
          workout={workout}
          setDay={setDay}
          day={day}
          />):(
          <Workout 
          handleBackClick={()=>setCurrentView("week")}
          setDay={setDay}
          day={day}/>
          )
        )}
      </div>
    </div>
  );
};

export default App;
