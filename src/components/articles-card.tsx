import * as React from "react"
import {card, cardContainer, cardHeading} from "../styles/card.module.css"
import PropTypes, { InferProps } from "prop-types";


const ArticlesCardPropTypes = {
};

type ArticlesCardTypes = InferProps<typeof ArticlesCardPropTypes>;


const ArticlesCard = ({} : ArticlesCardTypes ) => {
  return (
	<article className={cardContainer}>
		<h2 className={cardHeading}>Articles</h2>
		<div className={card}>
			Article 1
		</div>
		
	</article>
  )
}

ArticlesCard.propTypes = ArticlesCardPropTypes;

export default ArticlesCard