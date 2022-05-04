import React from "react";

function Card({post, user}) {
    return (
        <div>
            <h1>{user} says</h1>
            <h3>{post}</h3>
        </div>
    )
}

export default Card;