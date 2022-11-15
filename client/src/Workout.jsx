import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day, instructions}) => {
    const exerciseId = instructions.exercise_id;
    console.log("exercise_id is ",instructions.exercise_id) //use this id number to get the exercise name
    console.log("instructions in workout component is", instructions);

    const fetchExerciseName = async () => {
        const res = await axios.get(`http://localhost:8080/week/${exerciseId}`);
        const exerciseName = await res.data;
        console.log(exerciseName);
        return exerciseName;
  }
    


    return (
        <>
        <button className="back-button" onClick={()=>{
             handleBackClick();
             setDay("");
        }}>Back</button>
          <div>Here's your workout for {day}</div>
          <div>{fetchExerciseName()}</div>
        </>
    )
}

export default Workout;