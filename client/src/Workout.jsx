import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay}) => {
  
    return (
        <>
        <button onClick={()=>{
             handleBackClick();
             setDay(0);
        }
           
            }>Back</button>
          <div>workout of the day:</div>
        </>
    )
}

export default Workout;