import React from 'react'
import Project from '../../Components/Project/Project'

export default function Projects(props) {
    return (
        <div>
            {props.projects && props.projects.map((project, index) => {
                console.log(project)
                return <Project key={`${index}: ${project.title}`} project={project} />
            })}
        </div>
    )
}