import React from "react"
import { OutboundLink } from "gatsby-plugin-gtag"
import styles from "./viewLink.module.css"

const ViewLink = ({ link }) => {
  return (
    <div className={styles.viewLink}>
      <OutboundLink
        className={styles.link}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        View attack
      </OutboundLink>
    </div>
  )
}

export default ViewLink
