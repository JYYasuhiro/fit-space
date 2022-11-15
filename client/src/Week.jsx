import React, { useState } from 'react';
import axios from 'axios';



const Week = ({handleBackClick, setDay, day, setInstructions, instructions}) => {
 
//initially, day = 0, because no day was clicked
//get the entire workout, straight from the junction table
const handleWorkoutFetch = async(day) => {
  const res = await axios.get(`/workout/day/${day}`);
  const workout = await res.data; //will return object
  setInstructions(workout);
}
 //empty

  return (
    <>
      <button className="back-button" onClick={handleBackClick}>Back</button>

      <div className='menu_card'>
        <button onClick={()=> {
          setDay(1);
          handleWorkoutFetch(1);
        }}>Sunday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay(2);
          handleWorkoutFetch(2)
          }}>Monday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay(3)
          handleWorkoutFetch(3)
          }}>Tuesday</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          setDay(4)
          handleWorkoutFetch(4)
          }}>Wednesday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay(5);
          handleWorkoutFetch(5)
          }}>Thursday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay(6);
          handleWorkoutFetch(6)
          }}>Friday</button>
      </div>
      <div className='menu_card'>
      <button onClick={()=> {
          setDay(7);
          handleWorkoutFetch(7)
          }}>Saturday</button>
      </div>
    </>
  )
}

export default Week;