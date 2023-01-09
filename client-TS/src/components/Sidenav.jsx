import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidenav.css';

const Sidenav = () => {
    return (
        
            <nav className='sidenav'>
                <ul>
                    <li>
                        <Link to="/customMenu">Create new workout</Link>
                    </li>
                    <li>
                        <Link to="/allWorkouts">Choose a workout</Link>
                    </li>
                    <li>
                        <Link to="/workoutList">See all workouts</Link>
                    </li>
                </ul>
            </nav>
        
        
    )
}

export default Sidenav;