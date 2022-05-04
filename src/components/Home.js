import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import Feed from './Feed'
import Card from "./Card";

function Home({username}) {
  const [feed, setFeed] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const newPost = <Card 
    key={e.target.children[0].value} 
    post={e.target.children[0].value}
    user={username} />
    console.log(e.target.children[0].value)
    setFeed([...feed,newPost])

  }

  return (
    <div>
      <h1>Home!</h1>
      <h2>{username}</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button>Post</button>
      </form>
      {feed}
    </div>
  );
}

export default Home;
