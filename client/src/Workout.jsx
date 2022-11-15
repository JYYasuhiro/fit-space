import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day, instructions}) => {
    const exerciseObj = instructions[0];
  
    const getExerciseId = (exerciseObj) => {
        let result;
        for(const id in exerciseObj) {
            if(id === "exercise_id"){
                result = exerciseObj[id];
            }
        }
        return result;
    }
  
    const fetchExerciseName = async (id) => {
        const res = await axios.get(`/exercise/${id}`);
        const exerciseName = res.data;
        console.log("exercise name: ", exerciseName);
        return exerciseName; 
    }
  
    const workoutList = instructions.map(obj => {
            let name = (async()=>{
                return await fetchExerciseName(obj.exercise_id)});
            console.log("name is ", name);
                return(
                <div className="number">
                     {obj.order}.
                    <ul className = "exercise-container">
                        <li>exercise: {obj.exercise_id}</li>
                        <li>sets: {obj.sets}</li>
                        <li>reps: {obj.reps}</li>
                    </ul>
                </div>
                )
            })
    
    return (
        <>
        <button className="back-button" onClick={()=>{
             handleBackClick();
             setDay(0);
        }}>Back</button>
          <div>Here's your workout for today:</div>
          <div>{workoutList}</div>
        </>
    )
}

export default Workout;