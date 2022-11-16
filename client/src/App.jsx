import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";
import Workout from "./Workout";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") 
  const [workout, setWorkout] = useState("");
  const [day, setDay] = useState("");
  const [instructions, setInstructions] = useState([]); 
  const [exercises, setExercises] = useState([]);
  
  const handleSetExercises = async () => {
    const res = await axios.get('/exercises');
    const data = await res.data;
    setExercises(data);
  }

useEffect(()=>{
  handleSetExercises();
},[])

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
          setInstructions={setInstructions}
          instructions={instructions}
          />):(
          <Workout 
          handleBackClick={()=>setCurrentView("week")}
          setDay={setDay}
          day={day}
          setInstructions={setInstructions}
          instructions={instructions}
          exercises={exercises}/>
          )
        )}
      </div>
    </div>
  );
};

export default App;
