import React from "react"
import { Contact } from "../../types";
import {paper, frontCover, backCover, backContent, frontContent, flipped, frontFrontCover, backFrontCover} from "../../styles/book.module.css"
import { getIcon } from "../icons";
import {avatarImage} from "../../styles/card.module.css"
import headshot from '../../assets/headshot.png'
import data from '../../data.json'
import {infoText}  from "../../styles/card.module.css"

type FrontCoverProps = {
	currentLocation: number,
    zIndex: number,
}

const FrontCover = ({currentLocation, zIndex}: FrontCoverProps) => {
  return (
        <div className={`${paper} ${currentLocation >= 2 ? flipped : null}`} style={{zIndex: zIndex}}>
            <div className={`${frontCover} ${currentLocation === 1 ? frontFrontCover: null} ${currentLocation === 2 ? backFrontCover: null}`}>
                <div className={frontContent} style={{color: "white", flexDirection: "column"}}>
                    <h1>Portfolio</h1>
                    <h2>Joshua Torbett</h2>
                    <img className={avatarImage} src={headshot} alt={"Joshua Torbett Headshot"}/>
                </div>
            </div>
            <div className={`${backCover} ${currentLocation === 1 ? frontFrontCover: null} ${currentLocation === 2 ? backFrontCover: null}`}>
                <div className={backContent} style={{color: "white", flexDirection: "column"}}> 
                    <h1>Contact</h1>
                    {data.contact.map((info: Contact, index: number) => {
                        return <div key={index} className={infoText}><span>{getIcon(info.title)} {info.title}:</span> <span>{info.content}</span></div>
                    })}
                </div>
            </div>
        </div>
  )
}


export default FrontCover