import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  const { type, vlaue } = action;
  switch (type) {
    case 'F-inc':
      return state + vlaue;
    case 'F-dec':
      return state - vlaue;

    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div className="borderComp">
      <h3>UseReducer</h3>
      <p>
        {count} : {count2}
      </p>
      <button onClick={() => dispatch({ type: 'F-inc', vlaue: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: 'F-dec', vlaue: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'F-inc', vlaue: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'F-dec', vlaue: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch2({ type: 'F-inc', vlaue: 1 })}>+1</button>
      <button onClick={() => dispatch2({ type: 'F-dec', vlaue: 1 })}>-1</button>
      <button onClick={() => dispatch2({ type: 'F-inc', vlaue: 5 })}>+5</button>
      <button onClick={() => dispatch2({ type: 'F-dec', vlaue: 5 })}>-5</button>
      <button onClick={() => dispatch2({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default UseReducer;
