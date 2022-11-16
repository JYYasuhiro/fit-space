import React from 'react';
import './workout.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Workout = ({handleBackClick, setDay, day, instructions, exercises, exerciseType}) => {
    
    const getExerciseName = (id) => {
       for(let i = 0; i < exercises.length; i++){
        if(exercises[i].id === id) {
            return exercises[i].exercise_name;
        }
       }
    }

    const getExerciseType = (id) => {
        for(let i = 0; i < exerciseType.length; i++){
         if(exerciseType[i].id === id) {
             return exerciseType[i].exercise_type;
         }
        }
     }

    const workoutList = instructions.map(obj => {
            let name = getExerciseName(obj.exercise_id);
            let type = getExerciseType(obj.exercise_type)
                return(
                <div className="number">
                     {obj.order}.
                    <div className = "exercise-container">
                        <div>exercise: {name}</div>
                        <div>{obj.sets} sets of {obj.reps} reps</div>
                        <div>{type}</div>
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