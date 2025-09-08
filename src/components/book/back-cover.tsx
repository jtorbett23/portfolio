import React from "react"
import {paper, frontCover, backCover, flipped} from "../../styles/book.module.css"


type BackCoverProps = {
	currentLocation: number,
    zIndex: number,
    numberOfPages: number
}

const BackCover = ({currentLocation, zIndex, numberOfPages}: BackCoverProps) => {
  return (
        <div className={`${paper} ${currentLocation >= numberOfPages + 1 ? flipped : null}`} style={{zIndex: zIndex}}>
                <div className={frontCover}>
                </div>
                <div className={backCover}>
                </div>
            </div>
  )
}


export default BackCover