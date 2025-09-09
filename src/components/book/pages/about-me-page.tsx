import React from "react"
import data from "../../../data.json"

const AboutMe = () => {
  return (
        <>
            <h1>About Me</h1>
            <p style={{textAlign: "center"}}>{data.intro}</p>
        </>
  ) 
}

export default AboutMe