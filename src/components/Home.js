import React, {useState} from "react";
import Post from "./Post";

function Home({username}) {
  const [feed, setFeed] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const newPost = <Post 
    key={username+time} 
    text={e.target.children[0].value}
    user={username}
    time={time} />

    setFeed([...feed,newPost])
  }

  return (
    <div>
      <h1>Home!</h1>
      <h2>Hi {username}!</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button>Post</button>
      </form>
      <h1>Post List:</h1>
      <div>
        {feed}
      </div>
    </div>
  );
}

export default Home;
