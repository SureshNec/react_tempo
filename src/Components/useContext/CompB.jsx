import React, { useContext } from 'react';
import CompC from './CompC';
import { UserContext } from './CompContext';

export default function CompB() {
  const context = useContext(UserContext);
  return (
    <div>
      <CompC />
      <h3>UseContext Hook</h3>
      <p> {context}</p>
    </div>
  );
}
