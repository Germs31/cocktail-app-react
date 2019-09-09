import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    background-color: rgba(255,255,255, 0.5);
    border-bottom: 1px solid black;
`

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none; 
    padding: 15px;
    text-transform: uppercase;
    color: black;
    &:hover {
        color: teal;
    }
    &.active{
        color: teal;
    }
`

export const NavLeft = styled.div`
    width: 33.333%;
`

export const NavRight = styled.div`
    width: 33.333%;
    @media (max-width: 950px){
        a {
            display: inline-block;
            width: 66.666%;
        }
    }
`

export const NavMiddle = styled.div`
    width: 33.333%;
`

export const NavRow = styled.div`
    max-width: 1400px;
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

