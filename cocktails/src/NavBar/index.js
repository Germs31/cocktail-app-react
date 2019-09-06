import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user }) => {
    return (
        <div>
            {
                user ? <AuthNav user={user} /> : <NonAuthNav />
            }

        </div>
    )
}

const NonAuthNav = () => (
    <div>
        <NavLink exact to='/register'>Register</NavLink>
        <NavLink exact to='/'>Log In</NavLink>
    </div>
)

const AuthNav = ({ user }) => (
    <div>
        <NavLink exact to='/profile'>{user.username}'s Profile</NavLink>
        <NavLink exact to={`/editUser/${user._id}`}>Edit</NavLink>
    </div>
)

export default NavBar