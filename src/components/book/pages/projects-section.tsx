import React from "react"
import { PageSideContent } from "../../../types"
import {sectionPage} from "../../../styles/book.module.css"
import Project from "./project-page"
import data from '../../../data.json'

import projectIcon from '../../../assets/project-icon.svg'

const ProjectSection = () => {
    return (
        <div className={sectionPage}>
            <h1>Projects</h1>
            <img width={300} src={projectIcon}/>
        </div>
    )
}

export const getProjects = () : Array<PageSideContent>  => {
    let projects : Array<PageSideContent> = [{content: <ProjectSection/>, has_tab: true}]
    for (const project of data.projects)
        projects.push({content: <Project project={project}/>})
    return projects 
}