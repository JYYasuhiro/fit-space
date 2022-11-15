import React, { useState, useRef } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";
import Workout from "./Workout";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") 
  const [workout, setWorkout] = useState("");
  const [day, setDay] = useState(0);
  const [instructions, setInstructions] = useState([]); 
console.log(instructions);

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
          day === 0 ? (
          <Week 
          handleBackClick={()=>setCurrentView("menu")} 
          workout={workout}
          setDay={setDay}
          day={day}
          setInstructions={setInstructions}
          instructions={instructions}
          />):(
          <Workout 
          handleBackClick={()=>setCurrentView("week")}
          setDay={setDay}
          day={day}
          setInstructions={setInstructions}
          instructions={instructions}/>
          )
        )}
      </div>
    </div>
  );
};

export default App;
