import { useState, useEffect } from "react"
import styles from "./Volunteers.module.css"
import Carousel from "../Reusables/Carousel/Carousel"
import VolunteerItem from "../Reusables/VolunteerItem/VolunteerItem"

/**
 * Fetches data from "/data/volunteers.json" and sets the fetched data in the component's state.
 *
 * @return {JSX.Element} The rendered Volunteers component.
 */
const Volunteers = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await fetch("data/volunteers.json")
    const data = await response.json()
    setData(data)
  }

  return (
    <div id="team" className={styles.team}>
      <h1 className={styles.team__title}>
        Meet Our{" "}
        <span className={styles.team__title_highlight}>Volunteers</span>!
      </h1>
      <Carousel
        id="team__carousel"
        props={data.map((item) => {
          return (
            <VolunteerItem
              key={item.id}
              image={item.image}
              name={item.name}
              role={item.role}
              socials={item.social}
            />
          )
        })}
      />
    </div>
  )
}

export default Volunteers
