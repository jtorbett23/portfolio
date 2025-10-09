import React from "react"
import data from "../../../data.json"
import {techBubble} from "../../../styles/card.module.css"
import { wrap } from "module"

const AboutMe = () => {
  return (
        <>
        <h1 style={{paddingTop: "5%"}}>About Me</h1>
        <div style={{padding: "20px", display: "flex", flexDirection:"column", width: "90%"}}>
          <span>{data.intro}</span>
          <h2>Tech Stack Experience</h2>
          <div style={{display: "flex", flexWrap: "wrap"}}> 
            {data.technologies.map((tech : String, index:number)=> {
                return <span key={index} className={techBubble}>{tech}</span>
              })}
          </div>
        </div>
        </>
  ) 
}

export default AboutMe