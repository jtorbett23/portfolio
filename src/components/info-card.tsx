import * as React from "react"
import {card, infoText, centered, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";

export type Info = {
	title: string,
	content: string,
}

const InfoCardPropTypes = {
    infos: PropTypes.instanceOf(Array<Info>).isRequired
};

type InfoCardTypes = InferProps<typeof InfoCardPropTypes>;


const InfoCard = ({infos} : InfoCardTypes ) => {
  return (
	<article className={`${card} ${centered}`}>
		<h2 className={cardHeading}>About Me</h2>
		{infos.map((info : Info)=> {
			return <div className={infoText}><span>{info.title}:</span> <span>{info.content}</span></div>
		})}
		
	</article>
  )
}

InfoCard.propTypes = InfoCardPropTypes;

export default InfoCard