import React from "react";

function Account({username, feed}) {

    const userFeed = feed.filter((post)=>post.user===username)

    return (
        <div>
            <h1>Account Owner:</h1>
            <h2>{username}</h2>
            <h2>Number of Posts: {userFeed.length}</h2>
        </div>
    )
}

export default Account