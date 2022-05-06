import React, {useState} from "react";

function UserList({feed}) {

    const [search, setSearch] = useState('')

    
    function handleChange(e) {
        setSearch(e.target.value)
    }

    const users = []
    feed.forEach((post)=>users.push(post.user))
    const uniqueUsers = [...new Set(users)]
    const userListElements = uniqueUsers.map((user) => {
        if (user.includes(search)) {
            return <li key={user} >{user}</li>
        }
    })

    return (
        <div className="container">
            <h1>User List:</h1>
            <h4>Filter List:</h4>
            <input type='text' value={search} onChange={handleChange} />
            <ul>
                {userListElements}
            </ul>
        </div>
    )
}

export default UserList;