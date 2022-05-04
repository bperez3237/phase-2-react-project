import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Account from "./Account"
import Feed from "./Feed"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
