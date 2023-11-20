import React, { useRef } from 'react';

const UncontrolledComp = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    alert('Input Value: ' + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Value</button>
    </div>
  );
};

export default UncontrolledComp;
