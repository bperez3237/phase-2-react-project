import React, {useState} from "react";
import Post from "./Post";

function Home({username, feed, setFeed }) {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const [post,setPost] = useState('')

  function handleChange(e) {
    setPost(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const postObj = {'text': post,'user': username,'time': time}

    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj)
    })
      .then((r)=>r.json())
      .then((newPost)=>setFeed([...feed,newPost]))
  }

  let counter = 0
  const postElements = feed.map((post)=> {
    counter = counter + 1
    return <Post key={counter} text={post.text} user={post.user} time={post.time}/>
  })

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
        {postElements!==undefined ? postElements : null}
      </div>
    </div>
  );
}

export default Home;
