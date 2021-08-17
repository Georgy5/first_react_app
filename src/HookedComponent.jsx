import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const HookedComponent = () => {
  const [newGreeting, setNewGreeting] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input
          onChange={(event) => setNewGreeting(event.target.value)}
          type="text" 
          name="new-greeting" />
        <button
          onClick={()=> 
            dispatch({ type: 'CHANGE_GREETING', payload: newGreeting })
          }
        >Change greeting</button>
      </div>
    </>
  )
};

export default HookedComponent;
