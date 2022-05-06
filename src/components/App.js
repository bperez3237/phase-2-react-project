import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Account from "./Account"
import UserList from './UserList'
import bootstrap from 'bootstrap'



function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [feed, setFeed] = useState()

  const history = useHistory()

  useEffect(()=> {
    fetch('http://localhost:3000/posts')
      .then((r)=>r.json())
      .then((data)=>setFeed(data))
  },[])

  function logout() {
    setIsLoggedIn(false)
    setUsername('')
    history.push('/login')
  }


  if (loggedIn) {
    return (
      <div>
        <NavBar logout={logout} />
        <Switch>
        <Route path='/home'>
            <Home username={username} feed={feed} setFeed={setFeed} />
        </Route>
        <Route path='/account'>
          <Account username={username} feed={feed}/>
        </Route>
        <Route path='/userlist' >
          <UserList feed={feed} />
        </Route>
        </Switch>
      </div>
    )
  } else {
    history.push('/login')
    return (
      <div>
        <Route path='/login'>
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
