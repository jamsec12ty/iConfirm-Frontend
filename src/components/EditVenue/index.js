import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_VENUE_MUTATION,
  GET_VENUE_QUERY,
  UPSERT_VENUE_MUTATION,
} from "./queries";
import { useParams, Redirect } from "react-router-dom";

const EditVenue = (props) => {
  const { venueId } = useParams();
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    licenseeName: "",
    liquorLicNo: "",
    liquorLicStatus: false,
    masterLicNo: "",
    masterLicExp: "",
    masterLicStatus: false,
    membershipDate: "",
  });

  const [getVenueDetails, { loading, data: { venue } = {} }] = useLazyQuery(
    GET_VENUE_QUERY
  );

  const [deleteVenue] = useMutation(DELETE_VENUE_MUTATION);
  const [upsertVenue] = useMutation(UPSERT_VENUE_MUTATION);

  useEffect(() => {
    if (venueId) {
      getVenueDetails({ variables: { id: venueId } });
    }
  }, [getVenueDetails, venueId]);

  useEffect(() => {
    setFormData((data) => ({ ...data, ...venue }));
  }, [venue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const newVenue = await upsertVenue({ variables: { ...formData, _id: venueId } });
      console.log("New Venue:", newVenue);
      props.onCreateSuccess(newVenue.data.upsertVenue);
    } catch(err){
      console.log("Error", err);
    }
    // alert("Venue Updated");
    setIsSubmitted(true)

  };

  const handleDelete = async () => {
    await deleteVenue({ variables: { _id: venueId } });
  };

if(isSubmitted){
  return <Redirect
              to={{
              pathname: "/venue/created",
              state: { item: formData }
            }}
          />
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Logo</h3>
        <input
          value={formData.logo}
          onChange={(e) => {
            setFormData({ ...formData, logo: e.target.value });
          }}
        />
        <h3>Business Name</h3>
        <input
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <h3>Address</h3>
        <input
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
        />
        <h3>Phone</h3>
        <input
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
        <h3>Email</h3>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <h3>Licensee Name</h3>
        <input
          value={formData.licenseeName}
          onChange={(e) => {
            setFormData({ ...formData, licenseeName: e.target.value });
          }}
        />

        <h3>Liquor License Num:</h3>
        <input
          value={formData.liquorLicNo}
          onChange={(e) => {
            setFormData({ ...formData, liquorLicNo: e.target.value });
          }}
        />

        <button onClick={handleSubmit}>Submit</button>
        {venueId && (
          <div>
            <hr />
            <button color="red" onClick={handleDelete}>
              Delete Venue
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditVenue;
