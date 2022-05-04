import React from "react";
import { Redirect } from "react-router-dom";
import Feed from './Feed'

function Home({username}) {

  return (
    <div>
      <h1>Home!</h1>
      <h2>{username}</h2>
      <Feed />
    </div>
  );
}

export default Home;
