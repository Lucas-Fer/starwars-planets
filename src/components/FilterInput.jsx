import React, { useContext, useState } from 'react';
import StarWarsContext from '../hooks/context/AppContext';
import NumericFilters from './NumericFilters';

function FilterInput() {
  const { filterData } = useContext(StarWarsContext);

  const initialState = {
    filterByName: {
      name: '',
    },
  };

  const [inputValue, setInputValue] = useState(initialState);

  function handleChange({ target: { value } }) {
    setInputValue({
      filterByName: {
        name: value,
      },
    });
    filterData(value);
  }

  return (
    <header>
      <h1>Projeto Star Wars Planets - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        value={ inputValue.filterByName.name }
      />

      <NumericFilters />
    </header>
  );
}

export default FilterInput;
