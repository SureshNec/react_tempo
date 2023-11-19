import { useState } from 'react';

function FunChild(props) {
  const [some, setSome] = useState('Joker');
  return (
    <div>
      <h5>Child of Child</h5>
      <button onClick={() => setSome('Batman')}>change</button>
      <button onClick={() => props.para(some)}>Dare</button>
    </div>
  );
}
export default FunChild;
