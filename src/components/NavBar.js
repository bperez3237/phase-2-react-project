import React from "react";
import { NavLink} from "react-router-dom";

function NavBar({logout}) {
    return (
        <div>
            <NavLink to='./home'>Home</NavLink>
            <NavLink to='./account'>Account</NavLink>
            <NavLink to='/userlist'>User List</NavLink>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar;