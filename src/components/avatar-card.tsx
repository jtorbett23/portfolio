import * as React from "react"
import headshot from '../images/headshot.png'
import {card} from "../styles/card.module.css"


const AvatarCard  = () => {
  return (
	<article className={card}>
		<img id="profile-image" src={headshot} alt={"Joshua Torbett"}/>
		<p>Joshua Torbett</p>
		<p>Software Engineer</p>
	</article>
  )
}

export default AvatarCard