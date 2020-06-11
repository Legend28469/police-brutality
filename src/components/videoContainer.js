import React from "react"
import styles from "./videoContainer.module.css"
import Video from "./video"

const VideoContainer = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(incident => (
        <Video key={incident.id} data={incident} />
      ))}
    </div>
  )
}

export default VideoContainer
