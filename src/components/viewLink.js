import React from "react"
import styles from "./viewLink.module.css"

const ViewLink = ({ link }) => {
  return (
    <div className={styles.viewLink}>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        View attack
      </a>
    </div>
  )
}

export default ViewLink
