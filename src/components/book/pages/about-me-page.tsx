import React from "react"
import data from "../../../data.json"
import {techBubble} from "../../../styles/card.module.css"

const AboutMe = () => {
  return (
        <>
        <h1 style={{paddingTop: "5%"}}>About Me</h1>
        <div style={{padding: "20px", display: "flex", flexDirection:"column"}}>
          <span>{data.intro}</span>
          <h2>Tech Stack Experience</h2>
          <div style={{alignSelf: "flex-start"}}> 
            {data.technologies.map((tech : String)=> {
                return <span className={techBubble}>{tech}</span>
              })}
          </div>
        </div>
        </>
  ) 
}

export default AboutMe