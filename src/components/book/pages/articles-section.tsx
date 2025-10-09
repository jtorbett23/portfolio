import React from "react"
import { PageSideContent} from "../../../types"
import Article from "./article-page"
import {sectionPage} from "../../../styles/book.module.css"
import data from '../../../data.json'
import articleIcon from '../../../assets/article-icon.svg'

const ArticleSection = () => {
    return (
        <div className={sectionPage}>
            <h1>Articles</h1>
            <img width={300} src={articleIcon}/>
        </div>
    )
}

export const getArticles = () : Array<PageSideContent>  => {
    let articles : Array<PageSideContent> = [{content: <ArticleSection/>, has_tab: true}]
    for (const article of data.articles)
        articles.push({content: <Article article={article}/>})
    return articles 
}