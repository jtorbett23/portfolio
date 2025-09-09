import React from "react"
import { PageSideContent } from "../../../types"
import Article from "./article"

export const getArticles = () : Array<PageSideContent>  => {
    return [{content: "Articles", has_tag: true},
            {content: <Article/>}]    
}