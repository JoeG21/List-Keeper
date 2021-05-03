import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const handleLoginRender = (props) => {
        if (props) {
            return (
                <NavLink to='/logout'> Logout </NavLink>
            )
        } else {
            return (
                <>
                    <NavLink to='/signup' className='signup-margin'>
                        Sign Up
                    </NavLink>
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                </>
            )
        }
    }

    return (
        <div className='header'>
            <NavLink to='/'>
                <span className='app-name'> List Keeper </span>
            </NavLink>
            {
                handleLoginRender(props.isLoggedIn)
            }
        </div>
    )
}

export default Header