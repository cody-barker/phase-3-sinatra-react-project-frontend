import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addfarm">Add a Farm</NavLink>
        </nav>
    )
}

export default NavBar