// import response from './responseApi.json';

// descomentar isso dps
const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsApi = () => fetch(URL).then((response) => response.json());
// ----------------------------------
// const planetsApi = async () => response;
export default planetsApi;
// console.log(planetsApi());
