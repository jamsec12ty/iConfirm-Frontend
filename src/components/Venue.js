import React, {useEffect, useState} from 'react';
import axios from 'axios';


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
        <a href={props.item.url}>{props.item.name}</a>
    </div>
  );
};

export default Venue;
