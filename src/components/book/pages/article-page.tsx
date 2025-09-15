import React from "react"
import { ArticleData } from "../../../types"
import {techBubble} from "../../../styles/card.module.css"
import { getIcon } from "../../icons"

type ArticleProps = {
	article: ArticleData
}


const Article = ({article}: ArticleProps) => {
  return (
        <>
        <h1 style={{paddingTop: "5%"}}>{article.title}</h1>
        <div style={{padding: "20px", display: "flex", flexDirection:"column"}}>
          <h2 style={{alignSelf: "flex-start"}}>Description</h2>
          <span>{article.description}</span>
          <h2 style={{alignSelf: "flex-start"}}>Tags</h2>
                  <div style={{alignSelf: "flex-start"}}>
                  {article.tags.map((tech : String, index: number)=> {
                    return <span key={index} className={techBubble}>{tech}</span>
                  })}
          </div>
          <div style={{justifySelf: "center", alignSelf:"center", height:"25%", width:"25%", "paddingTop": "20px"}}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
          {getIcon("Dev", "100%", "100%")}
          </a>
          </div>
        </div>
        </>
  )
}

export default Article