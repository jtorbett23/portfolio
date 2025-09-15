import React from "react"
import {card, cardContainer, cardContainerHeading, techBubble, tagContainer} from "../../styles/card.module.css"
import { ProjectData } from "../../types";

type ProjectsCardProps = {
	projects: Array<ProjectData>
};

const ProjectsCard = ({projects} : ProjectsCardProps ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardContainerHeading}>Projects</h2>
		{projects.map((project:ProjectData, index: number)=> {
			return <div key={index} className={card}>
				<h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
				<span>{project.description}</span>
				<div className={tagContainer}>
					{project.tags.map((tech : String, index: number)=> {
						return <span key={index} className={techBubble}>{tech}</span>
					})}
				</div>
			</div>
		})}
		
	</article>
  )
}
export default ProjectsCard