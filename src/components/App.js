import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Account from "./Account"

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')


  if (loggedIn) {
    return (
      <div>
        <NavBar loggedIn={loggedIn}/>
        <Switch>
        <Route path='/home'>
            <Home username={username} />
        </Route>
          <Route path='/account'>
            <Account username={username} />
          </Route>
        </Switch>
      </div>
    )
  } else {
    return (
      <div>
        <Route exact path='/'>
            <Login username={username} setUsername={setUsername} />
        </Route>
      </div>
    )
  }
}

export default App;
