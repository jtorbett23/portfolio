import React from "react"
import { ProjectData } from "../../../types"
import {techBubble} from "../../../styles/card.module.css"
import { getIcon } from "../../icons"

type ProjectProps = {
  project: ProjectData
}

const Project = ({project} : ProjectProps) => {
  return (
          <>
            <h1 style={{paddingTop: "5%"}}>{project.title}</h1>
            <div style={{padding: "20px", display: "flex", flexDirection:"column"}}>
              <h2 style={{alignSelf: "flex-start"}}>Description</h2>
              <span>{project.description}</span>
              <h2 style={{alignSelf: "flex-start"}}>Tags</h2>
                      <div style={{alignSelf: "flex-start"}}>
                      {project.tags.map((tech : String, index: number)=> {
                        return <span key={index} className={techBubble}>{tech}</span>
                      })}
              </div>
              <div style={{justifySelf: "center", alignSelf:"center", height:"25%", width:"25%", "paddingTop": "20px"}}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
              {getIcon("GitHub", "100%", "100%")}
              </a>
              </div>
            </div>
            </>
  )
}

export default Project