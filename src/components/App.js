import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
