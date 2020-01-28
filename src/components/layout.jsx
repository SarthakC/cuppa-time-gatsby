import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import Navbar from "./Globals/Navbar/Navbar"
import Footer from "./Globals/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
