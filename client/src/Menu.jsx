import React from 'react';
import './menu.css';

const Menu = ({handleBackClick, handleCurrentView}) => {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <button onClick={handleCurrentView}>A: The Push-pull Workout</button>
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