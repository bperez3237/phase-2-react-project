import React from "react";

function Post({text, user, time}) {
    return (
        <div>
            <h2>{user} says</h2>
            <h3>{text}</h3>
            <h4>{time}</h4>
        </div>
    )
}

export default Post;