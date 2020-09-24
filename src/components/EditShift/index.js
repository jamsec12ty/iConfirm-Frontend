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
