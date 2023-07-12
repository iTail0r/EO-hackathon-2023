import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>iTailor</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;