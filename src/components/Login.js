import React from "react";
import { useHistory } from "react-router-dom";
// import Button from "react-bootstrap/Button"
// import "boostrap/dist/css/boostrap.min.css"
// import bootstrap from 'bootstrap'

function Login({ setIsLoggedIn, username, setUsername }) {
  // const boostrap = require('boostrap')
  const history = useHistory()

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoggedIn(true)
    history.push('/home')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <input type='text' name='user' value={username} onChange={handleChange}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
