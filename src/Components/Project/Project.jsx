import React from 'react'

export default function Project(props) {
    return (
        <div>
             {props.project && 
            <> 
                <h3><a href={props.project.url} target="_blank" rel="noreferrer">{props.project.title}</a></h3>
                <p>{props.project.description}</p>
            </>
            }
        </div>
    )
}
