import React, {useState} from "react";
import Post from "./Post";

function Home({username, feed, setFeed }) {
  const [post,setPost] = useState('')


  function handleChange(e) {
    setPost(e.target.value)

  }
  function handleSubmit(e) {
    e.preventDefault()

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const newPost = <Post 
    key={username+' '+time} 
    text={post}
    user={username}
    time={time} />

    setFeed([...feed,newPost])
  }

  return (
    <div>
      <h1>Home!</h1>
      <h2>Hi {username}!</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={post} onChange={handleChange} />
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
