import React from 'react';
import '../styles/menu.css';
import Button from '@mui/material/Button';

const Menu = ({handleCurrentView, setWorkout}) => {
   return (
    <>
      <div className='menu_card'>
        <Button sx = {{border:1}} 
        onClick={()=> {
          handleCurrentView();
          setWorkout("push-pull");
        }}
        >A: The Push-pull Workout</Button>
      </div>
      <div className='menu_card'>
        <Button sx = {{border:1}} onClick={()=> {
          handleCurrentView();
          setWorkout("bro-split");
        }} 
        >B: The "Bro-split" Workout</Button>
      </div>
      <div className='menu_card'>
        <Button sx = {{border:1}} onClick={()=> {
          handleCurrentView();
          setWorkout("calisthenics");
        }} 
        >C: The Calisthenics Workout</Button>
      </div>
    </>
  )
}

export default Menu;