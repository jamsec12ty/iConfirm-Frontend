import React from 'react';

const VenueShowScreen = (props) => {
  console.log(props);
  const item = props.location.state.item
  return (
    <div>
        <h3>Logo</h3>
          <h5>{item.logo}</h5>

        <h3>Business Name</h3>

        <h5>{item.name}</h5>

        <h3>Address</h3>

        <h5>{item.address}</h5>

        <h3>Phone</h3>

          <h5>{item.phone}</h5>

        <h3>Email</h3>

        <h5>{item.email}</h5>

        <h3>Licensee Name</h3>
        <h5>{item.licenseeName}</h5>

        <h3>Liquor License Num:</h3>
        <h5>{item.liquorLicNo}</h5>

    </div>
  );
};

export default VenueShowScreen;
