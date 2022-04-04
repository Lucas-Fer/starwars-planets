import React, { useState, useContext } from 'react';
import StarWarsContext from '../hooks/context/AppContext';

export default function NumericFilters() {
  const { filterByNumerics } = useContext(StarWarsContext);

  const initialState = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  // salvar no estado da aplicação os input
  const [filterByNumericValues, setfilterByNumericValues] = useState(initialState);

  const handleInputValue = ({ target }) => {
    const { name, value } = target;
    setfilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };
  // ---------------------------------------------------

  // selects dinâmicos
  const [inputSelect, setInputSelect] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleSelectColumn = (column) => {
    const removeColumn = inputSelect.filter((select) => select !== column);
    setInputSelect(removeColumn);
  };
  // -------------------------------------------------

  const saveArrayFiltered = () => {
    const { column } = filterByNumericValues;

    filterByNumerics(filterByNumericValues);

    setfilterByNumericValues({
      column: inputSelect[0], comparison: 'maior que', value: '0',
    });

    handleSelectColumn(column);
  };
  // -----------------------------------------------------

  return (
    <form>
      <h1>Filtragem numérica</h1>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleInputValue }
        value={ filterByNumericValues.column }
      >
        {
          inputSelect.map((select) => (
            <option
              value={ select }
              key={ select }
            >
              {select}
            </option>))
        }
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleInputValue }
        value={ filterByNumericValues.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value"
        data-testid="value-filter"
        type="number"
        onChange={ handleInputValue }
        value={ filterByNumericValues.value }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ saveArrayFiltered }
      >
        Filter
      </button>
    </form>
  );
}
