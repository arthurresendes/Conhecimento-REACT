import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
            <NavLink to='/contact'>Contato</NavLink>
        </nav>
    )
}

export default NavBar