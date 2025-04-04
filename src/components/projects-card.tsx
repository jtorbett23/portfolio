import * as React from "react"
import {card, cardContainer, cardContainerHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";
import { Project } from "../types";

const ProjectsCardPropTypes = {
	projects: Array<Project>
};

type ProjectsCardTypes = InferProps<typeof ProjectsCardPropTypes>;


const ProjectsCard = ({projects} : ProjectsCardTypes ) => {
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

ProjectsCard.propTypes = ProjectsCardPropTypes;

export default ProjectsCard