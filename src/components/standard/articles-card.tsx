import React from "react"
import {card, cardContainer, cardContainerHeading, techBubble, tagContainer} from "../../styles/card.module.css"
import { ArticleData } from "../../types";

type ArticlesCardProps = {
	articles: Array<ArticleData>
}

const ArticlesCard = ({articles} : ArticlesCardProps ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardContainerHeading}>Articles</h2>
		{articles.map((article:ArticleData, index: number)=> {
			return <div key={index} className={card}>
				<h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
				<span>{article.description}</span>
				<div className={tagContainer}>
				{article.tags.map((tech : String, index: number)=> {
					return <span key={index} className={techBubble}>{tech}</span>
				})}
				</div>
			</div>
		})}
	</article>
  )
}

export default ArticlesCard