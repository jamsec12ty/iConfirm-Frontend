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
        <h4>Venue</h4>
        <input
          value={formData.venue}
          onChange={(e) => {
            setFormData({ ...formData, venue: e.target.value });
          }}
        />

      <h4>Roster Type</h4>
        <input
          value={formData.employeeType}
          onChange={(e) => {
            setFormData({ ...formData, employeeType: e.target.value });
          }}
        />

      <h4>Roster Dte</h4>
        <input
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
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
