import React, {isValidElement} from "react"
import {front, back,  pageCornerForward, pageCornerBackward, frontContent, backContent, tag, tagBack} from "../../styles/book.module.css"
import { PageContent } from "../../types"

type PageSideProps = {
    data: PageContent,
    currentLocation: number,
    index: number,
    goToPage: Function,
    isBack?: boolean
}


const tagColours = ["red", "orange", "blue", "green", "pink", "yellow"]


const PageSide = ({data, currentLocation, index, goToPage, isBack=false}: PageSideProps) => {

    if(isBack)
        return (
        <div className={`${back} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag_front !== -1 ? <div className={tagBack}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[data.has_tag_front], marginLeft: `${(data.has_tag_front + 1) * 6}%`}}></div> : null}
            {data.has_tag_back !== -1 ?<div className={tag}  onMouseDown={() => goToPage(index + 3)} style={{backgroundColor: tagColours[data.has_tag_back], marginLeft: `${(data.has_tag_back + 1) * 6}%`}}></div> : null}
            <div className={backContent}>
                {isValidElement(data.back)? data.back : <h1>{data.back}</h1> }
            </div>
        </div>
        )
    return (
        <div className={`${front} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag_front !== -1 ?<div className={tag}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[data.has_tag_front], marginLeft: `${(data.has_tag_front + 1) * 6}%`}}></div> : null}
            {data.has_tag_back !== -1 ?<div className={tagBack}  onMouseDown={() => goToPage(index + 3)} style={{backgroundColor: tagColours[data.has_tag_back], marginLeft: `${(data.has_tag_back + 1) * 6}%`}}></div> : null}
            <div className={frontContent}>
                {isValidElement(data.front) ? data.front : <h1>{data.front}</h1> }
            </div>
        </div>
    )
}


export default PageSide