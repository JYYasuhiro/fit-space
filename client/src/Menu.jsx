import React from 'react';
import './menu.css';

const Menu = ({handleCurrentView, setWorkout}) => {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
    //when a menu option is clicked, the view is changed to "week" view, AND the state workout is set to whatever is clicked on.
  return (
    <>
      <div className='menu_card'>
        <button onClick={()=> {
          handleCurrentView();
          setWorkout("push-pull");
        }} >A: The Push-pull Workout</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          handleCurrentView();
          setWorkout("bro-split");
        }} >B: The "Bro-split" Workout</button>
      </div>
      <div className='menu_card'>
        <button onClick={()=> {
          handleCurrentView();
          setWorkout("calisthenics");
        }} >C: The Calisthenics Workout</button>
      </div>
    </>
  )
}

export default Menu;