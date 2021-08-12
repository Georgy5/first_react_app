import React from 'react';
import { useSelector } from 'react-redux';

const HookedComponent = () => {
  const greeting = useSelector((state) => state.greeting);
  return (
    <div>
      {greeting}
    </div>
  )
};

export default HookedComponent;
