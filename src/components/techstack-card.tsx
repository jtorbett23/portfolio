import * as React from "react"
import {card} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const TechStackCardPropTypes = {
	techs: PropTypes.instanceOf(Array<String>).isRequired
};

type TechStackCardTypes = InferProps<typeof TechStackCardPropTypes>;


const TechStackCard = ({techs} : TechStackCardTypes ) => {
  return (
	<article className={card}>
		{techs.map((tech : String)=> {
			return <div>{tech}</div>
		})}
		
	</article>
  )
}

TechStackCard.propTypes = TechStackCardPropTypes;

export default TechStackCard