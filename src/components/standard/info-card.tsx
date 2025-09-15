import React from "react"
import {card, infoText, centered, infoIcon} from "../../styles/card.module.css"
import { Contact } from "../../types";
import {getIcon}  from "../icons";

type InfoCardProps = {
	infos: Array<Contact>
}


const InfoCard = ({infos} : InfoCardProps ) => {

	const getContent = (info: Contact) => {
		if(info.url)
			return <a href={info.url} target="_blank" rel="noopener noreferrer"> <span>{info.content}</span> </a>

		return <span>{info.content}</span>
	}

	return (
		<article className={`${card} ${centered}`}>
			{infos.map((info : Contact, index:number)=> {
				return <div key={index} className={infoText}><span className={centered}>{getIcon(info.title)} {info.title}:</span> {getContent(info)}</div>
			})}
			
		</article>
	)
}

export default InfoCard