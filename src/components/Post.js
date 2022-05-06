import React from "react";

function Post({text, user, time}) {
    return (
        <div className="card">
            <h4>{user} says:</h4>
            <p class="card-body">{text}</p>
            <h4>posted at {time}</h4>
        </div>
    )
}

export default Post;