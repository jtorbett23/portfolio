import React from "react"
import { ArticleData } from "../../../types"
import { descriptionText, contentTitle, tagBubble, tagContainer, pageContent, linkContainer, linkSection} from "../../../styles/book.module.css"
import { getIcon } from "../../icons"

type ArticleProps = {
	article: ArticleData
}

const Article = ({article}: ArticleProps) => {
  return (
        <>
        <h2 className={contentTitle}>{article.title}</h2>
        <div className={pageContent}>
          <span className={descriptionText}>{article.description}</span>
                  <div className={tagContainer}>
                  {article.tags.map((tech : String, index: number)=> {
                    return <span key={index} className={tagBubble}>{tech}</span>
                  })}
          </div>
          <div className={linkSection}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className={linkContainer}>
                {getIcon("Dev", "100%", "100%")}
            </div>
          </a>
          </div>
        </div>
        </>
  )
}

export default Article