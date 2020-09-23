import React, { useEffect, useState } from 'react';
import './App.css';
import './stylesheet/styles.css';
import * as Constants from './constants.js';
import axios from 'axios';
import Employee from './components/Employee.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login.js';
import User from './components/User.js';
import Venue from './components/Venue.js';


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

  }, []); /*{empty array here means run only when component mounts.}*/

  return (

    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/user" component={ User } />
            <Route exact path="/venue" component={ Venue } />
          </div>
        </Router>


          <ul>
          {data.employees.map(item => (

            <li key={item.name}>
              <Employee item={item}/>
            </li>

          ))}
        </ul>



      </header>
    </div>


  );
}

export default App;
