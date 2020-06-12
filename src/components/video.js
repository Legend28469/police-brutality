import React, { useState, useEffect } from "react"
import styles from "./video.module.css"
import TweetEmbed from "react-tweet-embed"
import YouTube from "react-youtube"
import ViewLink from "./viewLink"

function debounce(fn, ms) {
  let timer

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null

      fn.apply(this, arguments)
    }, ms)
  }
}

const Video = ({ data, wait }) => {
  const { name, city, state, links, date_text } = data

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const [link, setLink] = useState("")
  const [videoHost, setVideoHost] = useState("")
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    setTimeout(function () {
      setHidden(false)
    }, wait)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    for (let i = 0; i < links.length; i++) {
      if (links[i].includes("twitter")) {
        let id = links[i].split("/")
        let stripped = id[id.length - 1].split("?")
        setLink(stripped[0])
        setVideoHost("Twitter")
        break
      }

      if (links[i].includes("youtu.be") || links[i].includes("youtube")) {
        let id = links[i].split("/")
        setLink(id[id.length - 1])
        setVideoHost("Youtube")
        break
      }
    }

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [dimensions.height, links, wait])

  return (
    <div
      className={`${styles.container} ${
        hidden ? styles.hidden : styles.visible
      }`}
    >
      <h3 className={styles.title}>{name}</h3>
      <h6 className={styles.location}>
        {city}, {state}
      </h6>
      <h5 className={styles.date}>{date_text}</h5>

      <div className={styles.video}>
        {dimensions.width >= 992 &&
        link.length > 0 &&
        videoHost === "Twitter" ? (
          <>
            <TweetEmbed id={link} options={{ theme: "dark", width: "350" }} />
          </>
        ) : (
          ""
        )}

        {dimensions.width < 992 &&
        link.length > 0 &&
        videoHost === "Twitter" ? (
          <TweetEmbed id={link} options={{ theme: "dark", width: "250" }} />
        ) : (
          ""
        )}

        {dimensions.width >= 992 &&
        link.length > 0 &&
        videoHost === "Youtube" ? (
          <YouTube videoId={link} opts={{ width: "350" }} />
        ) : (
          ""
        )}

        {dimensions.width < 992 &&
        link.length > 0 &&
        videoHost === "Youtube" ? (
          <YouTube videoId={link} opts={{ width: "250" }} />
        ) : (
          ""
        )}

        {link.length === 0 ? <ViewLink link={links[0]} /> : ""}
      </div>
    </div>
  )
}

export default Video
