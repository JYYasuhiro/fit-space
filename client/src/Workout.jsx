import React from 'react';
import axios from 'axios';
import './workout.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

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
        <Container>
            <Button className="back-button" onClick={()=>{
             handleBackClick();
             setDay("");
        }}>Back</Button>
                <div>Here's your workout for {day}:</div>
                <Container>{workoutList}</Container>
            </Container>
    )
}

export default Workout;