import React,{useState, useEffect} from "react";
import EditVenue from "../components/EditVenue";
import Venue from "../components/Venue.js";
import { GET_VENUES_QUERY } from "../constants";
import { useQuery, gql } from "@apollo/client";

function VenueScreen( props ) {

  const addVenue = (venue) => {
    setFullVenueList([...fullVenueList, venue])
  };

  const [fullVenueList, setFullVenueList] = useState([]);

  const { loading, error, data: venueList } = useQuery(GET_VENUES_QUERY);

  console.log({ loading, error, venueList });

  useEffect(()=> {
    if (!loading && !error && venueList){
      setFullVenueList(venueList.venues);
    }
  }, [venueList]);

  return (
    <div>
      <EditVenue onCreateSuccess={addVenue} />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        fullVenueList.map((item) => (
          <div key={item._id}>
            <Venue item={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default VenueScreen;
