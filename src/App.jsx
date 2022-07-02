import { getRandomArray } from 'data';
import React, { useMemo, useState } from 'react';
import './styles/index.scss';
import debounce from 'lodash.debounce';

const App = () => {
  const someNamesList = useMemo(() => getRandomArray(), []);

  const [namesList, setNamesList] = useState(someNamesList);

  const handleInputChange = (event) => {
    const filteredNameList = someNamesList.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setNamesList(filteredNameList);
  };

  const handleInputChangeDebounced = debounce(handleInputChange, 1000);
  console.log(namesList);

  return (
    <div>
      <input type="search" onChange={handleInputChangeDebounced} />
      <div>
        {namesList.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
