import React, { useState, useEffect } from "react";
import "../styles/AllWorkouts.css";
import axios from "axios";
import Menu from "../components/Menu";
import Week from "../components/Week";
import Workout from "../components/Workout";

const AllWorkouts = () => {
  const [currentView, setCurrentView] = useState("menu") 
  const [workout, setWorkout] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [instructions, setInstructions] = useState<[]>([]); 
  const [exercises, setExercises] = useState<[]>([]);
  const [exerciseType, setExerciseType] = useState<[]>([]);
  
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

  // useEffect(()=>{
  //   handleSetExercises();
  //   handleExerciseType();
  // },[])

  return (
    <>
      
    this is all workouts
    
      {/* <>
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
          exercises={exercises}
          exerciseType={exerciseType}
          />
          )
        )}
      </> */}
    </>
      
      
        
      
  );
};

export default AllWorkouts;