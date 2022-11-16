import React from 'react';
import './menu.css';
import Button from '@mui/material/Button';

const Menu = ({handleCurrentView, setWorkout}) => {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
    //when a menu option is clicked, the view is changed to "week" view, AND the state workout is set to whatever is clicked on.
  return (
    <>
      <div className='menu_card'>
        <Button sx = {{border:1}} onClick={()=> {
          handleCurrentView();
          setWorkout("push-pull");
        }}>A: The Push-pull Workout</Button>
      </div>
      <div className='menu_card'>
        <Button sx = {{border:1}} onClick={()=> {
          handleCurrentView();
          setWorkout("bro-split");
        }} >B: The "Bro-split" Workout</Button>
      </div>
      <div className='menu_card'>
        <Button sx = {{border:1}} onClick={()=> {
          handleCurrentView();
          setWorkout("calisthenics");
        }} >C: The Calisthenics Workout</Button>
      </div>
    </>
  )
}

export default Menu;