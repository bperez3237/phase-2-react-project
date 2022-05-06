import React from "react";
import { NavLink} from "react-router-dom";

function NavBar({logout}) {
    return (
        <div className="container">
            <div className="row">
                <NavLink to='./home' className='col-2' >Home</NavLink>
                <NavLink to='./account'className='col-2' >Account</NavLink>
                <NavLink to='/userlist'className='col-2' >User List</NavLink>
                <button onClick={logout} className='col-1 offset-md-5'>Logout</button>
            </div>
        </div>
    )
}

export default NavBar;