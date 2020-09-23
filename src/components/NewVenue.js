import React, {useEffect, useState} from 'react';
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

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input value={formData.logo} onChange={(e) => {
            setFormData({...formData, logo:e.target.value })
          }} />

        <input value={formData.name} onChange={(e) => {
            setFormData({...formData, name:e.target.value })
          }} />

        <input value={formData.address} onChange={(e) => {
            setFormData({...formData, address:e.target.value })
          }} />

        <input value={formData.phone} onChange={(e) => {
            setFormData({...formData, phone:e.target.value })
          }} />

        <input value={formData.email} onChange={(e) => {
            setFormData({...formData, email:e.target.value })
          }} />

        <input value={formData.licenseeName} onChange={(e) => {
            setFormData({...formData, licenseeName:e.target.value })
          }} />

        <input value={formData.liquorLicNo} onChange={(e) => {
            setFormData({...formData, liquorLicNo:e.target.value })
          }} />

        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
};

export default NewVenue;
