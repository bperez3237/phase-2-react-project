import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Account from "./Account"
import UserList from './UserList'


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [feed, setFeed] = useState()

  useEffect(()=> {
    fetch('http://localhost:3000/posts')
      .then((r)=>r.json())
      .then((data)=>setFeed(data))
  },[])


  if (loggedIn) {
    return (
      <div>
        <NavBar loggedIn={loggedIn}/>
        <Switch>
        <Route path='/home'>
            <Home username={username} feed={feed} setFeed={setFeed} />
        </Route>
        <Route path='/account'>
          <Account username={username} feed={feed} />
        </Route>
        <Route path='/userlist' >
          <UserList feed={feed} />
        </Route>
        </Switch>
      </div>
    )
  } else {
    return (
      <div>
        <Route exact path='/'>
            <Login 
            setIsLoggedIn={setIsLoggedIn} 
            username={username} 
            setUsername={setUsername} 
            />
        </Route>
      </div>
    )
  }
}

export default App;
