import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";
import Workout from "./Workout";
import AllWorkouts from "./AllWorkouts";

const App = () => {
  const [currentView, setCurrentView] = useState("menu") 
  const [workout, setWorkout] = useState("");
  const [day, setDay] = useState("");
  const [instructions, setInstructions] = useState([]); 
  const [exercises, setExercises] = useState([]);
  const [exerciseType, setExerciseType] = useState([]);
  
  const handleSetExercises = async () => {
    const res = await axios.get('/exercises');
    const data = await res.data;
    setExercises(data);
  }

  const handleExerciseType = async () => {
    const res = await axios.get('/types');
    const data = await res.data;
    setExerciseType(data);
  }

useEffect(()=>{
  handleSetExercises();
  handleExerciseType();
},[])

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className = "allWorkouts">
        <AllWorkouts/>
      </div>
    </div>
   
  );
};

export default App;
