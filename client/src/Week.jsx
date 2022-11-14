import React, { useState } from 'react';
import axios from 'axios';



const Week = ({handleBackClick, workout, setDay, day}) => {
    //returns all days of the week
    //in the state 'workout', the string for a particular workout should be set
    //each day should be clickable, showing the workout for the particular day
    //onClick 
    
    //handles workout fetches here?
const handleWorkoutFetch = async(day) => {
  const fetchedWorkout = await axios.get(`/workout/day/${day}`).then(response =>response.data);
  console.log("fetchedWorkout is", fetchedWorkout);
  //get fetch to show
}
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay(1);
          handleWorkoutFetch(day);
        }}>Sunday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(2)}>Monday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(3)}>Tuesday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(4)}>Wednesday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(5)}>Thursday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(6)}>Friday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> setDay(7)}>Saturday</button>
      </div>
    </>
  )
}

export default Week;