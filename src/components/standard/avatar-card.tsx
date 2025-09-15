import React from "react"
import headshot from '../../assets/headshot.png'
import {card, centered, avatarText, avatarImage} from "../../styles/card.module.css"

const AvatarCard  = () => {
  return (
	<article className={`${card} ${centered}`}>
		<img className={avatarImage} src={headshot} alt={"Joshua Torbett"}/>
		<h2 className={avatarText}>Joshua Torbett</h2>
		<h2 className={avatarText}>Software Engineer</h2>
	</article>
  )
}

export default AvatarCard