import React, { useState } from 'react';
import './OnOffButton.css';

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`onoff-switch ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <div className="toggle" />
    </div>
  );
};

export default OnOffButton;
