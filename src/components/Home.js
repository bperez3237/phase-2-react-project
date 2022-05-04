import React from "react";
import { Redirect } from "react-router-dom";
import Feed from './Feed'

function Home() {

  return (
    <div>
      <h1>Home!</h1>
      <Feed />
    </div>
  );
}

export default Home;
