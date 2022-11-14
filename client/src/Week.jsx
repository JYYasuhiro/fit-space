import React, { useState } from 'react';
import axios from 'axios';



const Week = ({handleBackClick}) => {
  
    //returns all days of the week
    //in the state 'workout', the string for a particular workout should be set
    //each day should be clickable, showing the workout for the particular day
    //onClick 
    
    //handles workout fetches here?
const handleWorkoutFetch = async() => {
  const fetchedWorkout = await axios.get('/workout/1').then(response =>console.log(response.data));
  console.log(fetchedWorkout);
  //get fetch to show
}
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <button onClick={handleWorkoutFetch}>Sunday</button>
      </div>
      <div className='menu_card'>
        <button>Monday</button>
      </div>
      <div className='menu_card'>
        <button>Tuesday</button>
      </div>
      <div className='menu_card'>
        <button>Wednesday</button>
      </div>
      <div className='menu_card'>
        <button>Thursday</button>
      </div>
      <div className='menu_card'>
        <button>Friday</button>
      </div>
      <div className='menu_card'>
        <button>Saturday</button>
      </div>
    </>
  )
}

export default Week;