import React from "react"
import styles from "./videoContainer.module.css"
import Video from "./video"

const VideoContainer = ({ data }) => {
  const sortedData = data.sort(function (a, b) {
    let keyA = a.date,
      keyB = b.date

    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })

  return (
    <div className={styles.container}>
      {sortedData.map((incident, i) => {
        if (i <= 50) {
          return <Video key={incident.id} data={incident} wait={i * 100} />
        }
        return ""
      })}
    </div>
  )
}

export default VideoContainer
