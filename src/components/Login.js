import React, {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";

function Login({ setIsLoggedIn, username, setUsername }) {
  const history = useHistory()

  function handleChange(e) {
    setUsername(e.target.value)

  }
  function handleSubmit(e) {
    e.preventDefault()
    e.target.value = ''
    console.log(e.target.input)
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
