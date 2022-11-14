import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  handleBackClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Week = ({handleBackClick}:Props) => {
  const [workout, setWorkout] = useState<string>("");
    //returns all days of the week 
    //each day should be clickable, showing the workout for the particular day
    //onClick 
    
    //handles workout fetches here?
const handleWorkoutFetch = async ()=> {
  const fetchedWorkout = await axios.get('http://localhost:8080/workout/1').then(response =>response.data);
  setWorkout(fetchedWorkout);
}

console.log(workout);
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <h1 onClick={handleWorkoutFetch}>Sunday</h1>
      </div>
      <div className='menu_card'>
        <h1>Monday</h1>
      </div>
      <div className='menu_card'>
        <h1>Tuesday</h1>
      </div>
      <div className='menu_card'>
        <h1>Wednesday</h1>
      </div>
      <div className='menu_card'>
        <h1>Thursday</h1>
      </div>
      <div className='menu_card'>
        <h1>Friday</h1>
      </div>
      <div className='menu_card'>
        <h1>Saturday</h1>
      </div>
    </>
  )
}

export default Week;