import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Venue = () => {

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
      <h2>Hello Venue</h2>
    </div>
  );
};

export default Venue;
