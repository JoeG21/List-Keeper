import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/'>
            <span className='app-name'> List Keeper </span>
            </NavLink>
            <NavLink to='/signup' className='signup-margin'>
                Sign Up
            </NavLink>
            <NavLink to='/login'>
                Login
            </NavLink>
        </div>
    )
}

export default Header