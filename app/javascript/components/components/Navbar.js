import React, { Component } from 'react'
import {Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return(
            <>
                <Navbar color="danger" dark expand="md" full>
                    <NavbarBrand href="/">
                        Virtual Apartment App
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                <Nav>
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
                    </Collapse>
                </Navbar>
            </>
        )
    }
}
export default Navigation