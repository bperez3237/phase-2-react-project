import React from "react";

function Account({username, feed}) {

    const userFeed = feed.filter((post)=>post.user===username)
   
    let counter = 0
    userFeed.forEach((post)=>{
        counter = counter+ post.text.length
    })

    console.log(userFeed[userFeed.length-1])






    return (
        <div>
            <h1>Account Owner:</h1>
            <h2>{username}</h2>
            <h2>Number of Posts: {userFeed.length}</h2>
            <h2>Characters Typed: {counter}</h2>
            <h2>Last Post Time: {userFeed[userFeed.length-1].time}</h2>
        </div>
    )
}

export default Account