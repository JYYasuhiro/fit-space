import react from 'react';

export default function Menu() {
    //returns all workout options: A (push-pull), B (bro-split), C (calisthenics)
  return (
    <>
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