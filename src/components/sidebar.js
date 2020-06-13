import React from "react"
import { Bar, defaults } from "react-chartjs-2"
import { OutboundLink } from "gatsby-plugin-gtag"
import styles from "./sidebar.module.css"

const Sidebar = ({ data }) => {
  const states = data.sort(function (a, b) {
    let keyA = a.value,
      keyB = b.value

    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })

  defaults.global.defaultFontColor = "white"

  return (
    <div className={styles.container}>
      <div className={styles.title}>Break down</div>

      <div className={styles.graph}>
        {data.length > 0 ? (
          <Bar
            data={{
              labels: [states[0].state, states[1].state, states[2].state],
              datasets: [
                {
                  label: "Incidents",
                  backgroundColor: [
                    "rgba(255, 0, 0, 1",
                    "rgba(170, 0, 0, 1",
                    "rgba(85, 0, 0, 1",
                  ],
                  data: [states[0].value, states[1].value, states[2].value],
                  hoverBackgroundColor: "rgba(255, 255, 255, 0.2",
                },
              ],
            }}
            options={{
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: `States With The Most Incidents`,
                fontSize: "14",
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10,
                    },
                  },
                ],
              },
            }}
          />
        ) : (
          ""
        )}
      </div>

      <div className={styles.action}>
        <h3 className={styles.actionTitle}>What can I do?</h3>

        <p className={styles.actionText}>
          Whatever you want really, but in all seriousness the most powerful and
          impactful thing you can do is{" "}
          <span className={styles.vote}>vote</span>{" "}
        </p>
      </div>

      <div className={styles.credit}>
        <p>
          <OutboundLink
            className={styles.smallText}
            href="https://johnathanbrown.me"
            target="_blank"
            rel="noreferrer"
          >
            I'm looking for work. Hire me!
          </OutboundLink>
        </p>
        <div className={styles.space}></div>
        <p>
          <OutboundLink
            className={styles.smallText}
            href="https://dribbble.com/shots/11936149-What-s-Next-2020"
            target="_blank"
            rel="noreferrer"
          >
            Design inspired by Elad Naider
          </OutboundLink>
        </p>
        <div className={styles.space}></div>
        <p>
          <OutboundLink
            className={styles.smallText}
            href="https://www.pexels.com/photo/man-wearing-black-vest-near-crowded-people-2348817/"
            target="_blank"
            rel="noreferrer"
          >
            Photo by Aloïs Moubax from Pexels
          </OutboundLink>
        </p>
      </div>
    </div>
  )
}

export default Sidebar
