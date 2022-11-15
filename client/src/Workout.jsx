import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day, instructions}) => {
    const exerciseId = instructions.exercise_id;
    console.log("instructions in workout component is", instructions); 
    console.log("exercise_id is ",  exerciseId)

    const fetchExerciseName = async (id) => {
        const res = await axios.get(`/exercise/${id}`);
        const exerciseName = await res.data;
        console.log("exercise name", exerciseName);
        return exerciseName;
  }
  


    return (
        <>
        <button className="back-button" onClick={()=>{
             handleBackClick();
             setDay(0);
        }}>Back</button>
          <div>Here's your workout for today:</div>
          <div></div>
        </>
    )
}

export default Workout;