import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../../../images/logo.svg"

import { FaCartArrowDown } from "react-icons/fa"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  const [state] = useState({
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about/",
        text: "about",
      },
    ],
  })

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Cuppa time logo" />
        {/*
        ATTRIBUTION FOR LOGO
        https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys  
*/}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {state.links.map(({ id, path, text }) => {
            return (
              <Nav.Link
                to={path}
                key={id}
                className="text-capitalize"
                as={Link}
              >
                {text}
              </Nav.Link>
            )
          })}
          <Nav.Link className="ml-sm-5" as={Link} to="/">
            <FaCartArrowDown className="cart-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
