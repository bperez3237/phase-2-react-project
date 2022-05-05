import React from "react";
import { NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to='./home'>Home</NavLink>
            <NavLink to='./account'>Account</NavLink>
            <NavLink to='/userlist'>User List</NavLink>
        </div>
    )
}

export default NavBar;