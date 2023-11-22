import React, { useState } from 'react';

function UseStateHook() {
  const [state, setState] = useState({ count: 0, firstName: '', lastName: '' });
  const [arr, setArr] = useState([]);

  //Increase or Decrease Value
  const number = 3;

  //Handle Increase
  const handleIncrease = () => {
    state.count + number <= 20
      ? setState(prevState => {
          return { ...state, count: prevState.count + number };
        })
      : setState({ ...state, count: 'Limit Reached' });
  };

  //Handle Decrease
  const handleDecrease = () => {
    state.count - number >= 0
      ? setState(prevState => {
          return { ...state, count: prevState.count - number };
        })
      : setState({ ...state, count: 'Limit Reached' });
  };

  //Handle Submit Names
  const handleSubmit = () => {
    let names = document.querySelector('.inputName').value;
    let refndName =
      names.slice(0, 1).toUpperCase() + names.slice(1).toLowerCase();
    setArr([...arr, { id: arr.length + 1, fName: refndName }]);
  };
  //   console.log(arr);

  return (
    <div className="borderComp">
      <h3>UseStateHook</h3>
      <p>Increase/Decrease by {number}</p>
      <h5>{state.count}</h5>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={() => setState({ ...state, count: 0 })}>Reset</button>
      <br />

      <p>
        Full Name: {state.firstName} {state.lastName}
      </p>

      <input
        type="text"
        value={state.firstName}
        onChange={e => setState({ ...state, firstName: e.target.value })}
      />
      <input
        type="text"
        value={state.lastName}
        onChange={e => setState({ ...state, lastName: e.target.value })}
      />
      <button
        onClick={() => setState({ ...state, firstName: '', lastName: '' })}
      >
        Reset
      </button>
      <br />
      <br />
      <p>Get Names</p>
      <input type="text" className="inputName" />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {arr.map(item => (
          <li key={item.id}>
            {item.id}: {item.fName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateHook;
