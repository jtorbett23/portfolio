import React from "react"
import {card, techBubble, techContainer, cardHeading} from "../../styles/card.module.css"

type TechStackCardProps = {
	techs: Array<String>
}

const TechStackCard = ({techs} : TechStackCardProps ) => {
  return (
	<article className={card}>
		<h2 className={cardHeading}>Tech Stack</h2>
		<div className={techContainer}>
		{techs.map((tech : String)=> {
			return <span className={techBubble}>{tech}</span>
		})}
		</div>
		
	</article>
  )
}

export default TechStackCard