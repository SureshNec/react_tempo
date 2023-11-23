import React, { useEffect, useRef, useState } from 'react';

function UseRef() {
  const inputRef = useRef(null);
  const [state, setState] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    timerRef.current = setInterval(() => {
      setState(prevState => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="borderComp">
      <h3>UseRef</h3>
      <input type="text" ref={inputRef} placeholder="focus on this" />
      <p>{state}</p>
      <button onClick={() => clearInterval(timerRef.current)}>Clear</button>
    </div>
  );
}

export default UseRef;
