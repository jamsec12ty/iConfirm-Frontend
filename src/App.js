import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Constants from './constants.js';
import axios from 'axios';
import graphql from 'graphql';
import Employee from './components/Employee.js';

function App() {

  const [data, setData] = useState( { employees: [] } );

  useEffect( () => {
    const fetchData = async () => {

      const queryResult = await axios.post (
        Constants.GRAPHQL_API, {
          query: Constants.GET_EMPLOYEES_QUERY
        }
      );
      const result = queryResult.data.data;
      setData({ employees: result.employees })
    };

    fetchData();

  })

  return (
    <div className="App">
      <header className="App-header">

        <ul>
          {data.employees.map(item => (

            <li key={item.id}>
              <Employee item={item}/>
            </li>

          ))}
        </ul>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
