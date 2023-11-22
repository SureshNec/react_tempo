import { useState } from 'react';
import ColorChange from './ColorChange';

function FunctionComp(props) {
  const [state, setState] = useState('Welcome');
  const [change, setChange] = useState('');
  const [count, setCount] = useState(0);

  const handleIncrease = value => {
    count >= 0 && count < 20
      ? setCount(count + value)
      : setCount('Limit Reached');
  };
  const handleDecrease = value => {
    count > 0 && count <= 20
      ? setCount(count - value)
      : setCount('Limit Reached');
  };

  //Styles
  const heading = {
    color: 'lightblue',
  };
  const btn = {
    backgroundColor: 'orange',
    borderRadius: '10px',
    outline: 'none',
    border: 'none',
    padding: '1em',
    marginRight: '1em',
  };

  return (
    <div>
      <h1 className="greet">
        {state} <span style={heading}>{props.name}</span>
      </h1>
      <button onClick={() => setState('Tanks for the sub ')}>Subscribe</button>
      <button onClick={() => setState('Welcome')}>Reset</button>
      <br />

      <input
        type="text"
        placeholder="type Some color..."
        value={change}
        onChange={e => setChange(e.target.value)}
      />
      {/* <input
        type="color"
        value={change}
        onChange={e => setChange(e.target.value)}
      /> */}
      <button onClick={() => setChange('')}>Reset</button>
      <br />
      {change}
      <ColorChange pValue={change} increTen={handleIncrease} btnStyle={btn} />
      <h4>{count}</h4>
      <button style={btn} onClick={() => handleIncrease(5)}>
        +5
      </button>
      <button style={btn} onClick={() => handleDecrease(5)}>
        -5
      </button>
      <button style={btn} onClick={() => setCount(0)}>
        ↺
      </button>
    </div>
  );
}

export default FunctionComp;
