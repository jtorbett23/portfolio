import * as React from "react"
import {card, cardContainer, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const IntroCardPropTypes = {
};

type IntroCardTypes = InferProps<typeof IntroCardPropTypes>;


const IntroCard = ({} : IntroCardTypes ) => {
  return (
	<article className={card}>
		<h2 className={cardHeading}>About Me</h2>
		Hi I'm Josh
	</article>
  )
}

IntroCard.propTypes = IntroCardPropTypes;

export default IntroCard