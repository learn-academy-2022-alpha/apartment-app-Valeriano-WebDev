import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return(
            <>
                <Nav>
                    <h3>Virtual Apartment App </h3>
                    <NavItem>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/listings" className="nav-link">View Listings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/aboutus" className="nav-link">About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/findahome" className="nav-link">Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/createanaccount" className="nav-link">Sign Up!</NavLink>
                    </NavItem>
                </Nav>
            </>
        )
    }
}
export default Navigation