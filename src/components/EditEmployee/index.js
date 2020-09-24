import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_EMPLOYEE_MUTATION,
  GET_EMPLOYEE_QUERY,
  UPSERT_EMPLOYEE_MUTATION,
} from "./queries";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { employeeId } = useParams();

  const [formData, setFormData] = useState({
    employeeType: "",
    profilePic: "",
    name: "",
    shifts: [],
    dob: "",
    address: "",
    phone: "",
    email: "",
    passwordDigest: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    securityLicNo: "",
    securityLicStatus: "",
    rsaNo: "",
    rsaLicStatus: "",
    firstAidExp: "",
  });

  const [
    getEmployeeDetails,
    { loading, data: { employee } = {} },
  ] = useLazyQuery(GET_EMPLOYEE_QUERY);

  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE_MUTATION);
  const [upsertEmployee] = useMutation(UPSERT_EMPLOYEE_MUTATION);

  useEffect(() => {
    if (employeeId) {
      getEmployeeDetails({ variables: { id: employeeId } });
    }
  }, [getEmployeeDetails, employeeId]);

  useEffect(() => {
    setFormData((data) => ({ ...data, ...employee }));
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await upsertEmployee({ variables: { ...formData, _id: employeeId } });
    alert("Employee Updated");
  };

  const handleDelete = async () => {
    await deleteEmployee({ variables: { _id: employeeId } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Name</h4>
        <input
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      <h4>Address</h4>
        <input
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
        />
      <h4>Phone</h4>
        <input
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
      <h4>Email</h4>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      <h4>Emergency Contact Name</h4>
        <input
          value={formData.emergencyContactName}
          onChange={(e) => {
            setFormData({ ...formData, emergencyContactName: e.target.value });
          }}
        />
      <h4>Emergency Contact Phone</h4>
        <input
          value={formData.emergencyContactPhone}
          onChange={(e) => {
            setFormData({ ...formData, emergencyContactPhone: e.target.value });
          }}
        />

      <h4>Security License No:</h4>
        <input
          value={formData.securityLicNo}
          onChange={(e) => {
            setFormData({ ...formData, securityLicNo: e.target.value });
          }}
        />

      <h4>Security License Status:</h4>
        <input
          value={formData.securityLicStatus}
          onChange={(e) => {
            setFormData({ ...formData, securityLicStatus: e.target.value });
          }}
        />

      <h4>First Aid Expiry:</h4>
        <input
          value={formData.firstAidExp}
          onChange={(e) => {
            setFormData({ ...formData, firstAidExp: e.target.value });
          }}
        />

        <button onClick={handleSubmit}>Submit</button>
        {employeeId && (
          <div>
            <hr />
            <button color="red" onClick={handleDelete}>
              Delete Employee
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditEmployee;
