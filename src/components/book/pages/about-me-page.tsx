import React from "react"
import data from "../../../data.json"
import { descriptionText, contentTitle, tagBubble, tagContainer, pageContent, linkContainer} from "../../../styles/book.module.css"

const AboutMe = () => {
  return (
        <>
        <h1 style={{paddingTop: "5%"}}>About Me</h1>
        <div style={{padding: "20px", display: "flex", flexDirection:"column", width: "90%"}}>
          <span className={descriptionText}>{data.intro}</span>
          <span className={descriptionText}>
            I enjoy learning new technologies, hosting projects with free solutions, and sharing that knowledge with others.</span>
          <h3>Technologies</h3>
          <div className={tagContainer}> 
            {data.technologies.map((tech : String, index:number)=> {
                return <span key={index} className={tagBubble}>{tech}</span>
              })}
          </div>
        </div>
        </>
  ) 
}

export default AboutMe