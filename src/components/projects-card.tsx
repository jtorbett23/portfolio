import React from "react"
import {card, cardContainer, cardContainerHeading} from "../styles/card.module.css"
import { Project } from "../types";

type ProjectsCardProps = {
	projects: Array<Project>
};

const ProjectsCard = ({projects} : ProjectsCardProps ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardContainerHeading}>Projects</h2>
		{projects.map((project:Project)=> {
			return <div className={card}>
				<h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
				<span>{project.description}</span>
			</div>
		})}
		
	</article>
  )
}
export default ProjectsCard