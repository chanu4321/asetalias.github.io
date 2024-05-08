import { useState, useEffect } from "react"
import styles from "./Community.module.css"

const Community = () => {
  const [communities, setCommunities] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch("/data/communities.json")
      const data = await response.json()
      setCommunities(data)
    } catch (error) {
      console.error("Error fetching community data:", error)
    }
  }

  return (
    <div id="community" className={styles.community}>
      <h1 className={styles.community__title}>
        Our
        <span className={styles.community__title_highlight}>
          {" "}
          Community
        </span>{" "}
        Partners!
      </h1>
      <div className={styles.powered}>
        {communities.map((community) => (
          <a
            key={community.name}
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${styles.community__chapter} ${
                community.outline ? styles.outline : ""
              }`}
              src={community.logo}
              alt={community.name}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Community
