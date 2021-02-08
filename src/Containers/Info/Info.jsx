import React from 'react'
import './Info.css'

export default function Info(props) {
    const imagesPath = `${process.env.PUBLIC_URL}/images/`

    return (
        <div>
            { props.info &&
            <>
            <img id="profile-image" src={`${imagesPath}${props.info.profile_image.name}`} alt={props.info.profile_image.alt}/>
            <p id="name">{props.info.name}</p>
            <p id="location">{props.info.location}</p>
            <div className="info-links-container">
            <a id="github" href={props.info.github_url} target="_blank" rel="noreferrer"> 
                <img className="image-link" src={`${imagesPath}github-logo.png`} alt="Github Logo"/>
            </a> 
            <a id="linkedin" href={props.info.linkedin_url} target="_blank" rel="noreferrer">
                <img className="image-link" src={`${imagesPath}linkedin-logo.png`} alt="Linkedin Logo"/>
            </a>
            <a id="email" href={props.info.email_url} target="_blank" rel="noreferrer">
                <img className="image-link" src={`${imagesPath}email-logo.png`} alt="Email Logo"/>
            </a>
            </div>
            </>
            }
        </div>
    )
}
