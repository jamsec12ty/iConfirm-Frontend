import React, { useEffect, useState } from "react";
// import "./App.css";
import "./stylesheet/styles.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import * as Constants from "./constants.js";
import axios from "axios";
import Employee from "./components/Employee.js";
import { BrowserRouter as Router, Route, Redirect ,Link,Switch} from "react-router-dom";
import Login from "./components/Login.js";
import User from "./components/User.js";
import Venue from "./components/Venue.js";
import EditVenue from "./components/EditVenue";
// import MyCalendar from "./components/Calendar/MyCalendar.js";
import VenueScreen from "./screens/VenueScreen.js";
import VenueShowScreen from "./screens/VenueShowScreen.js";

//this is the create event example.
import Selectable from "./components/Calendar/Selectable.js";


function App() {

  const [setData] = useState( { employees: [] } );
  // console.log(error, loading, data);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const fetchData = async () => {

      const queryResult = await axios.post (
        Constants.GRAPHQL_API, {
          query: Constants.GET_VENUES_QUERY
        }
      );
      const result = queryResult.data.data;
      setData({ employees: result.employees })
    };

    fetchData();

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log(token);

    if (token !== null && user !== null) {
      setCurrentUser(JSON.parse(user));
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []); /*{empty array here means run only when component mounts.}*/

  const performLogin = (token, user) => {
    console.log("In performLogin: ", token, user);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const performLogout = (token, user) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log(user);
    setCurrentUser(undefined);
    window.location.assign("/login");
  };

  console.log({ currentUser });
  return (
    <Router>
    <div className="App">
      <header style={{width:"100%",flex:"row",height:"30px"}}>
        <nav>
          <Link to="/user" >User</Link>
            <Link to="/venue" >Venue</Link>
          <Link to="/signup" >signup</Link>
          {currentUser ? (
            <a href="#" onClick={performLogout}>
              Logout
            </a>
          ):<a href="#" ></a>}

        </nav>
      </header>

        <div>
          <Switch>
          <Route
            exact
            path={["/login", "/"]}
            render={(props) => <Login {...props} onLogin={performLogin} />}
            />
          <Route exact path="/signup" component={EditVenue} />
            <Route exact path="/user" component={User} />
            <Route exact path="/mycalendar" component={Selectable} />
            <Route exact path="/venue/created" component={(props) => <VenueShowScreen  {...props}/>} />
<Route exact path="/venue/:venueId" component={EditVenue} />
            <Route
              exact
              path="/venue"
              component={(props) => (
                <VenueScreen {...props} />
              )}
            />
          </Switch>

          </div>


    </div>
  </Router>

  );
}

export default App;
