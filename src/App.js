import React, { useEffect, useState } from 'react';
import './App.css';
import './stylesheet/styles.css';
import * as Constants from './constants.js';
import axios from 'axios';
import Employee from './components/Employee.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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

   const token = localStorage.getItem('token')
   const user = localStorage.getItem('employee')
   console.log(token);

   if( token !== null && user !== null) {
     setCurrentUser(JSON.parse(user) );
     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   }
  }, []); /*{empty array here means run only when component mounts.}*/

  const performLogin = (token, user) => {
    console.log('In performLogin: ', token, user);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem( 'token', token);
    localStorage.setItem( 'user', JSON.stringify(user) );
    setCurrentUser(user);
  };

  const performLogout = () => {
    delete axios.defaults.headers.common.Authorization
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setCurrentUser('');
      console.log("Successfully logged out.");
  };

  return (

    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            {currentUser.name ?
              (<a href="#/login" onClick={performLogout}> Logout </a>)
              :
              (<Link to="/login"> Login </Link>)
            }
          </nav>
          <div>
            <Route exact path="/login" render={ (props) => <Login {...props} onLogin={performLogin} /> }/>
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
