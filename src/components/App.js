import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Account from "./Account"
import Feed from "./Feed"

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [username,setUsername] = useState('')

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <Switch>
        <Route path='/login'>
          <Login setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
        </Route>
        <Route path='/home'>
          <Home username={username} />
        </Route>
        <Route path='/account'>
          <Account username={username} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
