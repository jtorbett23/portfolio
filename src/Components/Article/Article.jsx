import React from 'react'

export default function Article(props) {
    return (
        <div>
            {props.article && props.article.title}
        </div>
    )
}
