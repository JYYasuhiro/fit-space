import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day, instructions}) => {
    const exerciseObj = instructions[0];
    console.log("instructions in workout component is", instructions);
   
    console.log("instructions[0] is ",  instructions[0]);
    
    const getExerciseId = (exerciseObj) => {
        let result;
        for(const id in exerciseObj) {
            if(id === "exercise_id"){
                result = exerciseObj[id];
            }
        }
        return result;
    }
  //getExerciseId will get the ID of exercise, if the exercise object is given


    const fetchExerciseName = async (id) => {
        const res = await axios.get(`/exercise/${id}`);
        const exerciseName = await res.data;
        console.log("exercise name", exerciseName);
        return exerciseName;
    }
  
    const workoutList = (instructions) => {
        
        return (
            instructions.map(obj => {
                return(
                    <>
                     {obj.order}.
                        <div className = "exercise-container">
                        <div>exercise: {fetchExerciseName(obj.exercise_id)}</div>
                        <div>sets: {obj.sets}</div>
                        <div>reps: {obj.reps}</div>
                    </div>
                    </>
                   
                )
            }) 
        
        )
    }


    return (
        <>
        <button className="back-button" onClick={()=>{
             handleBackClick();
             setDay(0);
        }}>Back</button>
          <div>Here's your workout for today:</div>
          <div>{workoutList(instructions)}</div>
        </>
    )
}

export default Workout;