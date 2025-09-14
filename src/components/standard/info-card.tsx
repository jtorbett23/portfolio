import React from "react"
import {card, infoText, centered, infoIcon} from "../../styles/card.module.css"
import { Contact } from "../../types";
import {getIcon}  from "../icons";

type InfoCardProps = {
	infos: Array<Contact>
}


const InfoCard = ({infos} : InfoCardProps ) => {
  return (
	<article className={`${card} ${centered}`}>
		{/* <h2 className={cardHeading}>About Me</h2> */}
		{infos.map((info : Contact)=> {
			return <div className={infoText}><span className={centered}>{getIcon(info.title)} {info.title}:</span> <span>{info.content}</span></div>
		})}
		
	</article>
  )
}

export default InfoCard