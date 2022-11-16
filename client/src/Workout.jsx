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
             return exerciseType[i].name;
         }
        }
     }

    const workoutList = instructions.map(obj => {
            let name = getExerciseName(obj.exercise_id);
            let type = getExerciseType(obj.type_id)
                return(
                    <div className = "exercise-container">
                        <div className="number">
                            {obj.order}. 
                        </div>
                        <div className = "exercise">exercise: {name}</div>
                        <div className = "instructions">{obj.sets} sets of {obj.reps} reps</div>
                        <div className = "target">target area: {type}</div>
                    </div>
                )
            })
    
    return (
        <Container sx={{borderRadius:2}}>
        <Button 
            sx={{borderRadius:2}} 
            className="back-button" onClick={()=>{
             handleBackClick();
             setDay("");
        }}>Back</Button>
        <Container>
            <div className='workout-text'>Here's your workout for {day}:</div>
        </Container>
               
        <Container 
        sx={{
            borderRadius:2,
            margin: 10
        }}>{workoutList}
        </Container>
        </Container>
    )
}

export default Workout;