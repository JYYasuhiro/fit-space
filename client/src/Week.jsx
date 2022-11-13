import react from 'react';
import axios from 'axios';

const Week = ({handleBackClick}) => {
    //returns all days of the week 
    //each day should be clickable, showing the workout for the particular day
    
    
    //handles workout fetches here?
// function handleWorkoutFetch() {
    
    
    
//     const workout = axios.get('/')
// }

  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <h1>Sunday</h1>
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