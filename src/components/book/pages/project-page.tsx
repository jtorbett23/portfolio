import React from "react"
import { ProjectData } from "../../../types"

type ProjectProps = {
  projectData: ProjectData
}

const Project = ({projectData} : ProjectProps) => {
  return (
        <h1>{projectData.title}</h1>
  )
}

export default Project