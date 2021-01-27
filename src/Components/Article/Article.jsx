import React from 'react'

export default function Article(props) {
    return (
        <div>
            {props.article && 
            <> 
                <h3><a href={props.article.url} target="_blank">{props.article.title}</a></h3>
                <p>{props.article.description}</p>
            </>
            }
            

        </div>
    )
}
