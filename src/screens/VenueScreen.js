import React from 'react';
import NewVenue from '../components/NewVenue.js';
import Venue from '../components/Venue.js';

function VenueScreen({loading,data}) {
  return (
    <div>


      <NewVenue />

      {loading?<h1>Loading</h1>:data.venues.map(item => (
      <div key={item.name}>
        <Venue item={item}/>
      </div>))}


    </div>
  );
}

export default VenueScreen;
