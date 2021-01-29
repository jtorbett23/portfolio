import React from 'react'

export default function Info(props) {
    const imagesPath = `${process.env.PUBLIC_URL}/images/`

    return (
        <div>
            Information
            { props.info &&
            <>
            <img src={`${imagesPath}${props.info.profile_image.name}`} alt={props.info.profile_image.alt}/>
            <p id="name">Name: {props.info.name}</p>
            <p id="location">Location: {props.info.location}</p>
            Github: <a id="github" href={props.info.github_url} target="_blank" rel="noreferrer">GITHUB</a> <br/>
            LinkedIn: < a id="linkedin" href={props.info.linkedin_url} target="_blank" rel="noreferrer">LINKEDIN</a>
            </>
            }
        </div>
    )
}
