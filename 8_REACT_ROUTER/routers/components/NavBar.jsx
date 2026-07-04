import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            {/*<Link to='/'>Home</Link>
            <Link to='sobre'>Sobre</Link>
            */}
            <NavLink to="/" className={ }>Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default NavBar