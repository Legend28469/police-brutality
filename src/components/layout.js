/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./reset.css"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header siteTitle="Police Brutality 2020" />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
