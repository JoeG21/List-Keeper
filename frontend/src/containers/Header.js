import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <span className='app-name'> List Keeper </span>
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