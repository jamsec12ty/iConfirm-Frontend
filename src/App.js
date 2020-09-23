import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Constants from './constants.js';
import axios from 'axios';
import graphql from 'graphql';
import Employee from './components/Employee.js';
import { HashRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login.js';
import User from './components/User.js';
import Venue from './components/Venue.js';

function App() {

  const [data, setData] = useState( { employees: [] } );
  const [currentUser, setCurrentUser] = useState( {} );

  useEffect( () => {
    // const fetchData = async () => {
    //
    //   const queryResult = await axios.post (
    //     Constants.GRAPHQL_API, {
    //       query: Constants.GET_EMPLOYEES_QUERY
    //     }
    //   );
    //   const result = queryResult.data.data;
    //   setData({ employees: result.employees })
    // };
    //
    // fetchData();

   const token = localStorage.getItem("token")
   const user = localStorage.getItem("user")
   console.log(token)

   if( token !== null && user !== null) {
     setCurrentUser(JSON.parse(user) );
     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   }

  }, []);

  const performLogin = (token, user) => {
    console.log('In performLogin: ', token, user);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem( 'token', token);
    localStorage.setItem( 'user', JSON.stringify(user) );
    setCurrentUser(user);
  };

  const performLogout = (token, user) => {
    delete axios.defaults.headers.common.Authorization
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log(user);
      setCurrentUser('');
  };

  return (

    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#" onClick={performLogout}>Logout</a>

        </nav>
        <Router>
          <div>
            <Route exact path="/login" render={ (props) => <Login {...props} onLogin={performLogin} /> }/>
            <Route exact path="/user" component={ User } />
            <Route exact path="/venue" component={ Venue } />

          </div>
        </Router>

      {
        //   <ul>
        //   {data.employees.map(item => (
        //
        //     <li key={item.id}>
        //       <Employee item={item}/>
        //     </li>
        //
        //   ))}
        // </ul>
      }

      </header>
    </div>
  );
}

export default App;
