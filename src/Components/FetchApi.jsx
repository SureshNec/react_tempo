import { useState, useEffect } from 'react';

function FetchApi() {
  const [state, setState] = useState('');
  const [apiData, setApiData] = useState();
  const [visiblity, setVisiblity] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users?skip=0&limit=50')
      .then(res => res.json())
      .then(data => {
        setApiData(data.users);
        // console.log(data.users);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = event => {
    setState(event.target.value.toLowerCase());
    setVisiblity('');
  };
  const handleClick = item => {
    setState(item.firstName);
    setVisiblity('hidden');
  };

  const arrFilter = apiData?.filter(item => {
    let firstName = item.firstName.toLowerCase();
    let lastName = item.lastName.toLowerCase();

    return (
      firstName.includes(state) ||
      (lastName.includes(state) && state !== firstName)
    );
  });

  return (
    <div>
      <label>Search for a Name: </label>
      <input type="text" onChange={handleSearch} value={state} />
      <ul>
        {state &&
          arrFilter?.map(item => (
            <li key={item.id} onClick={() => handleClick(item)}>
              {item.firstName}
            </li>
          ))}
      </ul>
      <p className={visiblity} style={{ color: 'orangered' }}>
        {arrFilter?.length !== 0 ? '' : 'name not found'}
      </p>
    </div>
  );
}

export default FetchApi;
