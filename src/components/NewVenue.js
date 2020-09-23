import React, {useEffect, useState} from 'react';
import { gql, useMutation } from '@apollo/client';
const NewVenue = (props) => {

const [formData,setFormData] = useState({
  logo:"",
  name:"",
  address:"",
  phone:"",
  email:"",
  licenseeName:"",
  liquorLicNo:"",
});


const ADD_VENUE = gql`
  mutation AddVenue(
    $logo: String,
    $name: String,
    $address: String,
    $phone: String,
    $email: String,
    $licenseeName: String,
    $liquorLicNo: String,
    $liquorLicStatus: Boolean,
    $masterLicNo: String,
    $masterLicExp: String,
    $masterLicStatus: Boolean,
    $membershipDate: String
  ) {
    createVenue(

      logo: $logo,
      name: $name,
      address: $address,
      phone: $phone,
      email: $email,
      licenseeName: $licenseeName,
      liquorLicNo: $liquorLicNo,
      liquorLicStatus: $liquorLicStatus,
      masterLicNo: $masterLicNo,
      masterLicNo: $masterLicExp,
      masterLicStatus: $masterLicStatus,
      membershipDate: $membershipDate

    ) {

      logo
      name
      address
      phone
      email
      licenseeName
      liquorLicNo

    }
  }
`;

const [addVenue, { data }] = useMutation(ADD_VENUE);

const handleSubmit = (e) => {

  e.preventDefault()
  console.log(formData);
  addVenue({ variables: formData });
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Logo</h3>
        <input value={formData.logo} onChange={(e) => {
            setFormData({...formData, logo:e.target.value })
          }} />
        <h3>Business Name</h3>
        <input value={formData.name} onChange={(e) => {
            setFormData({...formData, name:e.target.value })
          }} />
        <h3>Address</h3>
        <input value={formData.address} onChange={(e) => {
            setFormData({...formData, address:e.target.value })
          }} />
        <h3>Phone</h3>
        <input value={formData.phone} onChange={(e) => {
            setFormData({...formData, phone:e.target.value })
          }} />
        <h3>Email</h3>
        <input value={formData.email} onChange={(e) => {
            setFormData({...formData, email:e.target.value })
          }} />
        <h3>Licensee Name</h3>
        <input value={formData.licenseeName} onChange={(e) => {
            setFormData({...formData, licenseeName:e.target.value })
          }} />

        <h3>Liquor License Num:</h3>
        <input value={formData.liquorLicNo} onChange={(e) => {
            setFormData({...formData, liquorLicNo:e.target.value })
          }} />

        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
};

export default NewVenue;
