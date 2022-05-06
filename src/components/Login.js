import React from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn, username, setUsername }) {
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
    <div className="d-flex justify-content-center flex-wrap">
      <h1>Login</h1>
      <div className="break"></div>
      <form onSubmit={handleSubmit} >
        <input 
        placeholder="username"
        type='text' 
        name='user' 
        value={username} 
        onChange={handleChange}/>
        <button type='submit' className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
