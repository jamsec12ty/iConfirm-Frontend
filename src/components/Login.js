import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
///////////////////////////////////////////////////////////////
// function handleChange(event) {
//   console.log("AAAAAAAAAA", event.target.value);
//   console.log("BBBBBBBBBB", event.target.name);
//   // this.setState({[event.target.name]:event.target.value})
// }
///////////////////////////////////////////////////////////////

function validateForm() {
  return email.length > 7 && password.length > 6;
}

function handleSubmit(event) {
  console.log('Email: ', email, 'Password: ', password);
  event.preventDefault();
  axios.post('http://localhost:1337/login', {
    email: email,
    password: password

}).then((result) => {
  console.log(result.data)
  props.onLogin(result.data.token, result.data.employee)
  props.history.push("/")
})
.catch((err) => {
  console.warn("error:", err.response.data.message);
  setErrorMsg(`${err.response.data.message} - Invalid email or password.`);
})
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
    <p>
      {errorMsg}
    </p>
  </div>
);
}

export default Login;
