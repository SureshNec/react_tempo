import { useState } from 'react';
import FunChild from './FunChild';

function ChildComp(props) {
  const [state, setState] = useState('Dare to Change');

  const handlePara = child => {
    setState('Dare Accepted ' + child);
  };

  return (
    <div>
      <h5>This is Child</h5>
      <button onClick={() => props.func('play')}>Click me</button>
      <p>{state}</p>
      <FunChild para={handlePara} />
    </div>
  );
}
export default ChildComp;
