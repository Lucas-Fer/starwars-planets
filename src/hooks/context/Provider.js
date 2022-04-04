import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './AppContext';

const Provider = ({ children }) => {
  const [data, setPlanetsResults] = useState([]);

  // useCallback: armazena a função const separada em outro canto evitando loop
  const getApiPlanets = useCallback((results) => {
    setPlanetsResults(results);
  }, []);

  const [dataFiltered, setDataFiltered] = useState(data);

  const updateData = useCallback((results) => {
    setDataFiltered(results);
  }, []);

  const filterData = (input) => {
    const newArray = data.filter((planet) => planet.name.includes(input));
    setDataFiltered(newArray);
  };

  const filterByNumerics = ({ column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      setDataFiltered(
        dataFiltered.filter((planet) => Number(planet[column]) > Number(value)),
      );
      break;
    case 'menor que':
      setDataFiltered(
        dataFiltered.filter((planet) => Number(planet[column]) < Number(value)),
      );
      break;
    case 'igual a':
      setDataFiltered(
        dataFiltered.filter((planet) => Number(planet[column]) === Number(value)),
      );
      break;
    default:
      break;
    }
  };

  const context = {
    data,
    getApiPlanets,
    filterData,
    dataFiltered,
    updateData,
    filterByNumerics,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
