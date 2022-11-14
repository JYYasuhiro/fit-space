import React from 'react';
import axios from 'axios';


//this component will show once a day of the week is clicked

const Workout = ({handleBackClick, setDay}) => {
  

    return (
        <>
        <button onClick={()=>{
             handleBackClick();
             setDay(0);
        }
           
            }>Back</button>
          <div>workout of the day:</div>
        </>
    )
}

export default Workout;