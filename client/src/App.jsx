import React, { useState, useRef } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";
import Workout from "./Workout";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") //view is either menu or week
  const [workout, setWorkout] = useState("");//sets which type of workout is desired.
  const [day, setDay] = useState(0); //sets day to day of week chosen in Week
//when a workout option is clicked, TWO states are changed, currentView and workout.
console.log("day is", day);
console.log("current view", currentView);
console.log("chosen workout is:", workout);
//"menu" is the default, then will switch currentView to "week" if back button is clicked.


const handleCurrentView = () => {
  //switches view from menu to week by clicking on a workout on menu
  if(currentView === "menu") {
    setCurrentView("week") //if you're on menu page, switch to week view
    
 } else {
  setCurrentView("menu")
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
          handleCurrentView={handleCurrentView}
          setWorkout={setWorkout}
          />
        ) : (
          day === 0 ? (
          <Week 
          handleBackClick={()=>setCurrentView("menu")} //when clicked here, go back to "menu"
          workout={workout}
          setDay={setDay}
          day={day}
          />):(
          <Workout 
          handleBackClick={() =>setCurrentView("week")} //when clicked here, go back to "week"
          day={day}/>
          )
        )}
      </div>
    </div>
  );
};

export default App;
