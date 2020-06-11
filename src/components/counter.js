import React from "react"
import PropTypes from "prop-types"
import CountUp from "react-countup"
import styles from "./counter.module.css"

const Counter = ({ length }) => {
  return (
    <div className={styles.counter}>
      <h2 className={styles.count}>
        <CountUp duration={3} start={0} end={length} useEasing={false} />
      </h2>

      <p className={styles.text}>
        {" "}
        cases of police brutality on video so far.
        <br /> That's a lot! Like a lot alot. More than any of us should be
        comfortable with. How can you help? One of the most impactful ways is to{" "}
        <span className={styles.voteText}>vote</span>. Please remember and
        encourage others to do so.
      </p>
    </div>
  )
}

Counter.propTypes = {
  length: PropTypes.number.isRequired,
}

export default Counter
