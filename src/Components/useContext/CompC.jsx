import React from 'react';
import { UserConsumer } from './CompContext';

export default function CompC() {
  return (
    <div>
      <h3>UseContext</h3>
      <UserConsumer>
        {value => {
          return <p>{value}</p>;
        }}
      </UserConsumer>
    </div>
  );
}
