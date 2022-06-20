/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <main className="flex flex-col w-full max-w-2xl">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
