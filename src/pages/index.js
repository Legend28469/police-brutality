import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Counter from "../components/counter"
import Sidebar from "../components/sidebar"
import styles from "../components/app.module.css"

const IndexPage = () => {
  const [data, setData] = useState([])
  const [states, setStates] = useState([])

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json"
      )
      let res = await response.json()
      return res.data
    }

    getData().then(res => {
      let stateData = res.map(x => x.state)
      let unique = [...new Set(stateData)]
      let duplicates = unique.map(value => {
        return [
          {
            state: value,
            value: stateData.filter(str => str === value).length,
          },
        ]
      })

      setData(res)
      setStates(duplicates.flat())
    })
  }, [])

  return (
    <Layout>
      {/* {console.log("Data:", data)}
      {console.log("States: ", states)} */}

      <SEO title="Police Brutality 2020" />
      {data.length > 0 ? (
        <div className={styles.container}>
          <Sidebar data={states} />
          <Counter length={data.length} />
        </div>
      ) : (
        ""
      )}
    </Layout>
  )
}

export default IndexPage
