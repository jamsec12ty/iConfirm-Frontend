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
<<<<<<< HEAD
    date: "",
    clockOnDate: "",
    clockOffDate: "",
    shiftConfirmed: false,
=======
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
>>>>>>> 79b444b5e17664b60fd712149abdf765804c7ab7
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 79b444b5e17664b60fd712149abdf765804c7ab7
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
