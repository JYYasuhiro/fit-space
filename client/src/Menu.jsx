import react from 'react';
import './menu.css';

const Menu = ({handleBackClick}) => {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <div className='menu_card'>
        <h1>A: The Push-pull Workout</h1>
      </div>
      <div className='menu_card'>
        <h1>B: The "Bro-split" Workout</h1>
      </div>
      <div className='menu_card'>
        <h1>C: The Calisthenics Workout</h1>
      </div>
    </>
  )
}

export default Menu;