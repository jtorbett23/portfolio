import React from "react"
import {card, cardHeading} from "../styles/card.module.css"


type IntroCardProps = {
	intro: String
}


const IntroCard = ({intro} : IntroCardProps ) => {
  return (
	<article className={card}>
		<h2 className={cardHeading}>About Me</h2>
		{intro}
	</article>
  )
}

export default IntroCard