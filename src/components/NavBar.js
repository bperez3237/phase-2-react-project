import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to='./login'>Login</NavLink>
            <NavLink to='./home'>Home</NavLink>
            <NavLink to='./account'>Account</NavLink>
            <NavLink to='./feed'>Feed</NavLink>
        </div>
    )
}

export default NavBar;