import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_ROSTER_MUTATION,
  GET_ROSTER_QUERY,
  UPSERT_ROSTER_MUTATION,
} from "./queries";
import { useParams } from "react-router-dom";

const EditRoster = () => {
  const { rosterId } = useParams();

  const [formData, setFormData] = useState({
    date: "",
    venue: "",
    employeeType: "",
  });

  const [getRosterDetails, { loading, data: { roster } = {} }] = useLazyQuery(
    GET_ROSTER_QUERY
  );

  const [deleteRoster] = useMutation(DELETE_ROSTER_MUTATION);
  const [upsertRoster] = useMutation(UPSERT_ROSTER_MUTATION);

  useEffect(() => {
    if (rosterId) {
      getRosterDetails({ variables: { id: rosterId } });
    }
  }, [getRosterDetails, rosterId]);

  useEffect(() => {
    setFormData((data) => ({ ...data, ...roster }));
  }, [roster]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await upsertRoster({ variables: { ...formData, _id: rosterId } });
    alert("Roster Updated");
  };

  const handleDelete = async () => {
    await deleteRoster({ variables: { _id: rosterId } });
  };

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
        {rosterId && (
          <div>
            <hr />
            <button color="red" onClick={handleDelete}>
              Delete Roster
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditRoster;
