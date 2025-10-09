import React, {isValidElement} from "react"
import {front, back,  pageCornerForward, pageCornerBackward, frontContent, backContent, tab, tabBack, sectionTitle} from "../../styles/book.module.css"
import { PageContent } from "../../types"

type PageSideProps = {
    data: PageContent,
    currentLocation: number,
    index: number,
    goToPage: Function,
    isBack?: boolean
}


const tabColours = ["red", "orange", "blue", "green", "pink", "yellow"]


const PageSide = ({data, currentLocation, index, goToPage, isBack=false}: PageSideProps) => {

    if(isBack)
        return (
        <div className={`${back} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tab_front !== -1 ? <div className={tabBack}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tabColours[data.has_tab_front], marginLeft: `${(data.has_tab_front + 1) * 6}%`}}></div> : null}
            {data.has_tab_back !== -1 ?<div className={tab}  onMouseDown={() => goToPage(index + 3)} style={{backgroundColor: tabColours[data.has_tab_back], marginLeft: `${(data.has_tab_back + 1) * 6}%`}}></div> : null}
            <div className={backContent}>
                {isValidElement(data.back)? data.back : <h1 className={sectionTitle}>{data.back}</h1> }
            </div>
        </div>
        )
    return (
        <div className={`${front} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tab_front !== -1 ?<div className={tab}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tabColours[data.has_tab_front], marginLeft: `${(data.has_tab_front + 1) * 6}%`}}></div> : null}
            {data.has_tab_back !== -1 ?<div className={tabBack}  onMouseDown={() => goToPage(index + 3)} style={{backgroundColor: tabColours[data.has_tab_back], marginLeft: `${(data.has_tab_back + 1) * 6}%`}}></div> : null}
            <div className={frontContent}>
                {isValidElement(data.front) ? data.front : <h1 className={sectionTitle}>{data.front}</h1> }
            </div>
        </div>
    )
}


export default PageSide