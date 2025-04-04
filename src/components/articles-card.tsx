import * as React from "react"
import {card, cardContainer, cardContainerHeading, techBubble, tagContainer} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";
import { Article } from "../types";

const ArticlesCardPropTypes = {
	articles : Array<Article>
};

type ArticlesCardTypes = InferProps<typeof ArticlesCardPropTypes>;


const ArticlesCard = ({articles} : ArticlesCardTypes ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardContainerHeading}>Articles</h2>
		{articles.map((article:Article)=> {
			return <div className={card}>
				<h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
				<span>{article.description}</span>
				<div className={tagContainer}>
				{article.tags.map((tech : String)=> {
					return <span className={techBubble}>{tech}</span>
				})}
				</div>
			</div>
		})}
	</article>
  )
}

ArticlesCard.propTypes = ArticlesCardPropTypes;

export default ArticlesCard