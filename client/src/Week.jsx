import React, { useState } from 'react';
import axios from 'axios';



const Week = ({handleBackClick, setDay, day}) => {
  console.log("the day is currently:", day)
    //returns all days of the week
    //in the state 'workout', the string for a particular workout should be set
    //each day should be clickable, showing the workout for the particular day
    //onClick 
  
    //handles workout fetches here?
const handleWorkoutFetch = async(day) => {
  const res = await axios.get(`http://localhost:8080/workout/day/1`);
  const workout = await res.data
  console.log("workout" , workout);
  
  
  console.log("fetchedWorkout is", fetchedWorkout);
  //get fetch to show
}
  return (
    <>
      <button className="back-button" onClick={handleBackClick}>Back</button>

      <div className='menu_card'>
        <button onClick={()=> {
          setDay("Sunday");
          handleWorkoutFetch(day);
        }}>Sunday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay("Monday");
          handleWorkoutFetch(day)
          }}>Monday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay("Tuesday")
          handleWorkoutFetch(day)
          }}>Tuesday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay("Wednesday")
          handleWorkoutFetch(day)
          }}>Wednesday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay("Thursday")
          handleWorkoutFetch(day)
          }}>Thursday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay("Friday")
          handleWorkoutFetch(day)
          }}>Friday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay("Saturday")
          handleWorkoutFetch(day)
          }}>Saturday</button>
      </div>
    </>
  )
}

export default Week;