import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day, instructions, exercises}) => {
    
    const getExerciseName = (id) => {
       for(let i = 0; i < exercises.length; i++){
        if(exercises[i].id === id) {
            return exercises[i].exercise_name;
        }
       }
    }

    const workoutList = instructions.map(obj => {
        
            let name = getExerciseName(obj.exercise_id);
                return(
                <div className="number">
                     {obj.order}.
                    <div className = "exercise-container">
                        <div>exercise: {name}</div>
                        <div>{obj.sets} sets of {obj.reps} reps</div>
                    </div>
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