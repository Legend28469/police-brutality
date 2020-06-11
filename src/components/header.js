// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => {
  const title = siteTitle.split(" ")

  return (
    <header>
      <h1 className={styles.title}>
        {title[0]} <span className={styles.cross}>{title[1]}</span> {title[2]}
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Police Brutality 2020`,
}

export default Header
