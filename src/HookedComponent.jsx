import React from 'react';
import { useSelector } from 'react-redux';

const HookedComponent = () => {
  const greeting = useSelector((state) => state.greeting);
  return (
    <>
      {greeting}
      <input type="text" name="new-greeting" />
      <button>Change greeting</button>
    </>
  )
};

export default HookedComponent;
