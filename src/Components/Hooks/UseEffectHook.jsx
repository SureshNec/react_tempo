import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function UseEffectHook() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    // console.log('UseEffect Called');
    Axios.get('https://dummyjson.com/products?skip=0&limit=8')
      .then(res => setApiData(res.data.products))
      .catch(err => console.log(err));
    // return console.log('UseEffect Unmounted');
  }, []);
  // console.log(apiData);
  // console.log('Outer Function Called');
  return (
    <div className="borderComp">
      <h3>UseEffect Hook</h3>
      <ul className="useEffect_items">
        {apiData?.map(item => (
          <li key={item.id} style={{ boxShadow: '2px 2px 15px lightgrey' }}>
            <img
              className="useEffect_Images"
              src={item.thumbnail}
              alt={item.title}
              // width={100}
            />
            <p>
              {item.title} | {item.price}$
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectHook;
