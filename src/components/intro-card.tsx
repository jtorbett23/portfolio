import * as React from "react"
import {card, cardContainer, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const IntroCardPropTypes = {
	intro: String
};

type IntroCardTypes = InferProps<typeof IntroCardPropTypes>;


const IntroCard = ({intro} : IntroCardTypes ) => {
  return (
	<article className={card}>
		<h2 className={cardHeading}>About Me</h2>
		{intro}
	</article>
  )
}

IntroCard.propTypes = IntroCardPropTypes;

export default IntroCard