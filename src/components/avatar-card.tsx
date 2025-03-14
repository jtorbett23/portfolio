import * as React from "react"
import headshot from '../assets/headshot.png'
import {card, centered} from "../styles/card.module.css"

const AvatarCard  = () => {
  return (
	<article className={`${card} ${centered}`}>
		<img id="profile-image" src={headshot} alt={"Joshua Torbett"}/>
		<p>Joshua Torbett</p>
		<p>Software Engineer</p>
	</article>
  )
}

export default AvatarCard