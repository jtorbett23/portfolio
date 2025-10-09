import React from "react"
import { ProjectData } from "../../../types"
import { descriptionText, contentTitle, tagBubble, tagContainer, pageContent, linkContainer, linkSection} from "../../../styles/book.module.css"
import { getIcon } from "../../icons"

type ProjectProps = {
  project: ProjectData
}

const Project = ({project} : ProjectProps) => {
  return (
          <>
            <h2 className={contentTitle}>{project.title}</h2>
            <div className={pageContent}>
              <span className={descriptionText}>{project.description}</span>
                      <div className={tagContainer}>
                      {project.tags.map((tech : String, index: number)=> {
                        return <span key={index} className={tagBubble}>{tech}</span>
                      })}
              </div>
              <div className={linkSection}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className={linkContainer}>
                {getIcon("GitHub", "100%", "100%")}
                </div>
              </a>
              </div>
            </div>
            </>
  )
}

export default Project