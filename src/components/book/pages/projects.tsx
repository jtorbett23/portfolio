import React from "react"
import { PageSideContent } from "../../../types"
import Project from "./project"

export const getProjects = () : Array<PageSideContent>  => {
    return [{content: "Projects", has_tag: true},
            {content: <Project/>}]    
}