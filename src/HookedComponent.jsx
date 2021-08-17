import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HookedComponent = () => {
  const greeting = useSelector((state) => state.greeting);
  const [newGreeting, setNewGreeting] = useState('');
  const dispatch = useDispatch();
  return (
    <Fragment>
      {greeting}
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
    </Fragment>
  )
};

export default HookedComponent;
