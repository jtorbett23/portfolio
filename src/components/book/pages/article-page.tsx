import React from "react"
import { ArticleData } from "../../../types"

type ArticleProps = {
	articleData: ArticleData
}

const Article = ({articleData}: ArticleProps) => {
  return (
        <h1>{articleData.title}</h1>
  )
}

export default Article