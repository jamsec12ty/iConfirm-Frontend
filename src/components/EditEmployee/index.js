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
