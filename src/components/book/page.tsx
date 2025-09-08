import React from "react"
import {paper, flipped,} from "../../styles/book.module.css"
import PageSide from "./page-side"
import { PageContent } from "../../types"

type PageProps = {
    data: PageContent,
	currentLocation: number,
    zIndex: number,
    index: number,
    goToPage: Function 
}

const Page = ({data, currentLocation, zIndex, index, goToPage}: PageProps) => {
  return (
        <div className={`${paper} ${currentLocation >= index + 3 ? flipped : null}`}
    style={{zIndex: zIndex}}>
        <PageSide index={index} goToPage={goToPage} currentLocation={currentLocation} data={data}/>
        <PageSide index={index} goToPage={goToPage} currentLocation={currentLocation} data={data} isBack={true}/>
    </div>
  )
}


export default Page