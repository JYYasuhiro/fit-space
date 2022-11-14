import React from 'react';
import axios from 'axios';
import './workout.css'

const Workout = ({handleBackClick, setDay, day}) => {

    return (
        <>
        <button className="back-button" onClick={()=>{
             handleBackClick();
             setDay("");
        }}>Back</button>
          <div>Here's your workout for {day}</div>
        </>
    )
}

export default Workout;