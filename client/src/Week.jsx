import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


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
      <Button variant="outline" className="back-button" onClick={handleBackClick}>Back</Button>

      <div className='menu_card'>
        <Button onClick={()=> {
          setDay("Sunday");
          handleWorkoutFetch(1);
        }}>Sunday</Button>
      </div>
      <div className='menu_card'>
        <Button onClick={()=> {
          setDay("Monday");
          handleWorkoutFetch(2)
          }}>Monday</Button>
      </div>
      <div className='menu_card'>
        <Button onClick={()=> {
          setDay("Tuesday")
          handleWorkoutFetch(3)
          }}>Tuesday</Button>
      </div>
      <div className='menu_card'>
        <Button onClick={()=> {
          setDay("Wednesday")
          handleWorkoutFetch(4)
          }}>Wednesday</Button>
      </div>
      <div className='menu_card'>
      <Button onClick={()=> {
          setDay("Thursday");
          handleWorkoutFetch(5)
          }}>Thursday</Button>
      </div>
      <div className='menu_card'>
      <Button onClick={()=> {
          setDay("Friday");
          handleWorkoutFetch(6)
          }}>Friday</Button>
      </div>
      <div className='menu_card'>
      <Button onClick={()=> {
          setDay("Saturday");
          handleWorkoutFetch(7)
          }}>Saturday</Button>
      </div>
    </>
  )
}

export default Week;