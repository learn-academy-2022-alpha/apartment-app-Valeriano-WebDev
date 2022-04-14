import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        console.log("logged_in:", logged_in)
        console.log("current_user:", current_user)
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
                        <NavLink to="/aboutus" className="nav-link">About us</NavLink>
                    </NavItem>
                    {logged_in &&
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>Apartments
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavItem>
                                <NavLink to="/listings" className="nav-link">Apartments</NavLink>
                                </NavItem>
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem>
                                    <NavLink to="/listings" className="nav-link">Create a listing</NavLink>
                                </NavItem>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavItem>
                                    <NavLink to="/listings" className="nav-link">View All Listings</NavLink>
                                </NavItem>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    }
                    {logged_in &&
                        <NavItem>
                            <NavLink to="/findahome" className="nav-link">Search</NavLink>
                        </NavItem>
                    }
                    {logged_in &&
                        <NavItem>
                            <a href={sign_out_route} className="nav-link">Logout</a>
                        </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                            <a href={sign_in_route} className="nav-link">Login</a>
                        </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                            <a href={new_user_route} className="nav-link">Sign Up!</a>
                        </NavItem>
                    }
                </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}
