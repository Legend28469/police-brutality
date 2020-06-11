import React from "react"
import styles from "./video.module.css"

const Video = ({ data }) => {
  const { name, city, state, links, date_text } = data

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <h6 className={styles.location}>
        {city}, {state}
      </h6>
      <h5 className={styles.date}>{date_text}</h5>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Sunsets don&#39;t get much better than this one over{" "}
          <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">
            @GrandTetonNPS
          </a>
          .{" "}
          <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">
            #nature
          </a>{" "}
          <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">
            #sunset
          </a>{" "}
          <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
        </p>
        &mdash; US Department of the Interior (@Interior){" "}
        <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">
          May 5, 2014
        </a>
      </blockquote>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  )
}

export default Video
