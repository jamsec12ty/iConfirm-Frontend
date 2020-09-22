import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function validateForm() {
  return email.length > 7 && password.length > 6;
}

function handleSubmit(event) {
  // console.log('It ain't easy being Cheesy');
  // console.log('Email: ', email, 'Password: ', password);
  
  event.preventDefault();
}

return (
  <div className="Login">
    <form onSubmit={handleSubmit}>

        <label>Email</label>
        <br></br>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      <br></br>
      <label>Password</label>
      <br></br>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      <br></br>

      <button disabled={!validateForm()} type="submit">
        Login
      </button>
    </form>
  </div>
);
}

export default Login;
