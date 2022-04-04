import React, { useContext } from 'react';
import planetsApi from '../services/planetsApi';
import StarWarsContext from '../hooks/context/AppContext';
import usePlanetData from '../hooks/usePlanetData';

function Table() {
  const { dataFiltered, getApiPlanets, updateData } = useContext(StarWarsContext);

  usePlanetData(planetsApi, getApiPlanets);
  usePlanetData(planetsApi, updateData);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {dataFiltered.map((planet, index) => (
          <tr key={ index }>
            <td key={ planet.name }>{planet.name}</td>
            <td key={ planet.rotation_period }>{planet.rotation_period}</td>
            <td key={ planet.orbital_period }>{planet.orbital_period}</td>
            <td key={ planet.diameter }>{planet.diameter}</td>
            <td key={ planet.climate }>{planet.climate}</td>
            <td key={ planet.gravity }>{planet.gravity}</td>
            <td key={ planet.terrain }>{planet.terrain}</td>
            <td key={ planet.surface_water }>{planet.surface_water}</td>
            <td key={ planet.population }>{planet.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
