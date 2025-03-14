import * as React from "react"
import {card, cardContainer, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const ProjectsCardPropTypes = {
};

type ProjectsCardTypes = InferProps<typeof ProjectsCardPropTypes>;


const ProjectsCard = ({} : ProjectsCardTypes ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardHeading}>Projects</h2>
		<div className={card}>
			Github Project 1
		</div>
		
	</article>
  )
}

ProjectsCard.propTypes = ProjectsCardPropTypes;

export default ProjectsCard