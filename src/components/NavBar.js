import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({loggedIn}) {
    return (
        <div>
            <NavLink to='./login'>{loggedIn ? 'Logout' : 'Login'}</NavLink>
            <NavLink to='./home'>Home</NavLink>
            <NavLink to='./account'>Account</NavLink>
        </div>
    )
}

export default NavBar;