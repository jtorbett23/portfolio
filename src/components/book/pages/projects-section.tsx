import React from "react"
import { PageSideContent } from "../../../types"
import Project from "./project-page"
import data from '../../../data.json'

import projectIcon from '../../../assets/project-icon.svg'

const ProjectSection = () => {
    return (
        <div style={{height: "100%", display: "flex", flexDirection:"column", justifyContent: "center"}}>
            <h1>Projects</h1>
            <img width={100} src={projectIcon}/>
        </div>
    )
}

export const getProjects = () : Array<PageSideContent>  => {
    let projects : Array<PageSideContent> = [{content: <ProjectSection/>, has_tag: true}]
    for (const project of data.projects)
        projects.push({content: <Project project={project}/>})
    return projects 
}