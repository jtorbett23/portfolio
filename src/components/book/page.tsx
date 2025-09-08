import React from "react"
import {front, back, paper,  pageCornerForward, pageCornerBackward, frontContent, backContent,  flipped, tag, tagBack} from "../../styles/book.module.css"
import { PageContent } from "../../types"

type PageProps = {
    data: PageContent,
	currentLocation: number,
    zIndex: number,
    index: number,
    tagIndex: number,
    goToPage: Function 
}



const tagColours = ["red", "orange", "blue"]


const Page = ({data, currentLocation, zIndex, index, tagIndex, goToPage}: PageProps) => {
  return (
        <div className={`${paper} ${currentLocation >= index + 3 ? flipped : null}`}
    style={{zIndex: zIndex}}>
        <div className={`${front} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag ?<div className={tag}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
            <div className={frontContent}>
                <h1>{data.front}</h1>
            </div>
        </div>
        <div className={`${back} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
            {data.has_tag ?<div className={tagBack}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
            <div className={backContent}>
                <h1>{data.back}</h1>
            </div>
        </div>
    </div>
  )
}


export default Page