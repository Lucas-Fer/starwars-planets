import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './hooks/context/Provider';
import FilterInput from './components/FilterInput';

function App() {
  return (
    <Provider>
      <FilterInput />
      <br />
      <Table />
    </Provider>
  );
}

export default App;
