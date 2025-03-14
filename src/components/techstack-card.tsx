import * as React from "react"
import {card, techBubble, techContainer, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const TechStackCardPropTypes = {
	techs: PropTypes.instanceOf(Array<String>).isRequired
};

type TechStackCardTypes = InferProps<typeof TechStackCardPropTypes>;


const TechStackCard = ({techs} : TechStackCardTypes ) => {
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

TechStackCard.propTypes = TechStackCardPropTypes;

export default TechStackCard