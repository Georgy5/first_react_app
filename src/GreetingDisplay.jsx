import React from 'react';
import { useSelector } from 'react-redux';

const GreetingDisplay = () => {
  const { greeting } = useSelector((state) => state);
  return (
    <div>
      <h3>Here we display the greeting:</h3>
      {greeting}
      <p></p>
    </div>
  );
};

export default GreetingDisplay;
