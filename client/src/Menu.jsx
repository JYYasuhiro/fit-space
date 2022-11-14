import React from 'react';
import './menu.css';

const Menu = ({handleBackClick, handleCurrentView, setWorkout}) => {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
    //when a menu option is clicked, the view is changed to "week" view, AND the state workout is set to whatever is clicked on.
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <button onClick={()=> {
          handleCurrentView();
          setWorkout("push-pull");
        }} 
          setWorkout>A: The Push-pull Workout</button>
      </div>
      <div className='menu_card'>
        <button onClick={handleCurrentView}>B: The "Bro-split" Workout</button>
      </div>
      <div className='menu_card'>
        <button onClick={handleCurrentView}>C: The Calisthenics Workout</button>
      </div>
    </>
  )
}

export default Menu;