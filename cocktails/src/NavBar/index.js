import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, NavContainer, NavLeft, NavRight, NavMiddle, NavRow } from './style'

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
    <NavContainer>
        <NavRow>
            <NavLeft>
                <h3>Mixologist</h3>
            </NavLeft>
            <NavMiddle></NavMiddle>
            <NavRight>
                <Link exact to='/register'>Register</Link>
                <Link exact to='/'>Log In</Link>
            </NavRight>
        </NavRow>
    </NavContainer>
)

const AuthNav = ({ user }) => (
    <NavContainer>
        <NavRow>
            <NavLeft>
                <Link exact to='/profile'>Welcome, {user.username}</Link>
            </NavLeft>
            <NavMiddle></NavMiddle>
            <NavRight>
                <Link exact to={`/editUser/${user._id}`}>Edit</Link>
                <Link exact to={`/showPage`}>Random Drinks</Link>
            </NavRight>
        </NavRow>
    </NavContainer>
)

export default NavBar