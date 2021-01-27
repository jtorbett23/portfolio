import React from 'react'

export default function Project(props) {
    return (
        <div>
            {props.project && props.project.title}
        </div>
    )
}
