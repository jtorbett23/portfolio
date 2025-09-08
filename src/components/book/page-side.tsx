import React from "react"
import {front, back,  pageCornerForward, pageCornerBackward, frontContent, backContent, tag, tagBack} from "../../styles/book.module.css"
import { PageContent } from "../../types"

type PageSideProps = {
    data: PageContent,
    currentLocation: number,
    index: number,
    tagIndex: number,
    goToPage: Function,
    isBack?: boolean
}


const tagColours = ["red", "orange", "blue"]


const PageSide = ({data, currentLocation, index, tagIndex, goToPage, isBack=false}: PageSideProps) => {

    if(isBack)
        return (
        <div className={`${back} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag ?<div className={tagBack}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
            <div className={backContent}>
                <h1>{data.back}</h1>
            </div>
        </div>
        )
    return (
        <div className={`${front} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag ?<div className={tag}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
            <div className={frontContent}>
                <h1>{data.front}</h1>
            </div>
        </div>
    )
}


export default PageSide