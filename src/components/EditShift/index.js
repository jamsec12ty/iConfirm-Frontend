import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_SHIFT_MUTATION,
  GET_SHIFT_QUERY,
  UPSERT_SHIFT_MUTATION,
} from "./queries";
import { useParams } from "react-router-dom";

const EditShift = () => {
  const { shiftId } = useParams();

  const [formData, setFormData] = useState({
    date: "",
    clockOnDate: "",
    clockOffDate: "",
    shiftConfirmed: false,
    employee: "",
    roster: ""
  });

  const [getShiftDetails, { loading, data: { shift } = {} }] = useLazyQuery(
    GET_SHIFT_QUERY
  );

  const [deleteShift] = useMutation(DELETE_SHIFT_MUTATION);
  const [upsertShift] = useMutation(UPSERT_SHIFT_MUTATION);

  useEffect(() => {
    if (shiftId) {
      getShiftDetails({ variables: { id: shiftId } });
    }
  }, [getShiftDetails, shiftId]);

  useEffect(() => {
    setFormData((data) => ({ ...data, ...shift }));
  }, [shift]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await upsertShift({ variables: { ...formData, _id: shiftId } });
    alert("Shift Updated");
  };

  const handleDelete = async () => {
    await deleteShift({ variables: { _id: shiftId } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Date:</h3>
        <input
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
          }}
        />
        <h3>Shift Start</h3>
        <input
          value={formData.clockOnDate}
          onChange={(e) => {
            setFormData({ ...formData, clockOnDate: e.target.value });
          }}
        />
        <h3>Finish Shift</h3>
        <input
          value={formData.clockOffDate}
          onChange={(e) => {
            setFormData({ ...formData, clockOffDate: e.target.value });
          }}
        />
        <h3>Confirm</h3>
        <input
          value={formData.shiftConfirmed}
          onChange={(e) => {
            setFormData({ ...formData, shiftConfirmed: e.target.value });
          }}
        />

        <button onClick={handleSubmit}>Submit</button>
        {shiftId && (
          <div>
            <hr />
            <button color="red" onClick={handleDelete}>
              Delete Shift
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditShift;
