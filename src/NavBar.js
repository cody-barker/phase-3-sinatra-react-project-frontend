import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/editfarms">Edit Farms</NavLink>
        </nav>
    )
}

export default NavBar