import React from 'react';

function MemoComp(props) {
  console.log('Rendering Memo Comp');
  return (
    <div>
      <h3>Memo Component</h3>
      <p>{props.value}</p>
    </div>
  );
}

export default React.memo(MemoComp);
