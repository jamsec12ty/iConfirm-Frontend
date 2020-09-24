import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Menu from "./Calendar/Menu.js";

const Venue = (props) => {


  useEffect(() => {
    axios.get('http://localhost:1337/login')
    .then(res => {
      console.log('response: ', res.data)
    })
    .catch(err => {
      console.warn('authentication error: ', err)
    })
  }, []);

  return (

      <div>
        <br/>
        <Link to={`/venue/${props.item._id}`}>{props.item.name}</Link>
      </div>

  );
};

export default Venue;
