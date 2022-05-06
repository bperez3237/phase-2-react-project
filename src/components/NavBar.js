import React from "react";
import { NavLink} from "react-router-dom";

function NavBar({logout}) {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <button onClick={logout} className='nav-link' className='btn btn-primary'>Logout</button>
                <NavLink to='./home' className='nav-link' >Home</NavLink>
                <NavLink to='./account'className='nav-link' >Account</NavLink>
                <NavLink to='/userlist'className='nav-link' >User List</NavLink>
            </div>
        </div>
    )
}

export default NavBar;