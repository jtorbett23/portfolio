import React from 'react'
import Article from '../../Components/Article/Article'

export default function Articles(props) {
    return (
        <div>
             {props.articles && props.articles.map((article, index) => {
                return <Article key={`${index}: ${article.title}`} article={article} />
            })}
        </div>
    )
}
