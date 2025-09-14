import React from "react"
import { PageSideContent} from "../../../types"
import Article from "./article-page"
import data from '../../../data.json'
import articleIcon from '../../../assets/article-icon.svg'

const ArticleSection = () => {
    return (
        <div style={{height: "100%", display: "flex", flexDirection:"column", justifyContent: "center"}}>
            <h1>Articles</h1>
            <img width={100} src={articleIcon}/>
        </div>
    )
}

export const getArticles = () : Array<PageSideContent>  => {
    let articles : Array<PageSideContent> = [{content: <ArticleSection/>, has_tag: true}]
    for (const article of data.articles)
        articles.push({content: <Article article={article}/>})
    return articles 
}