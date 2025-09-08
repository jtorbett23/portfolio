import React, {useState} from "react"
import {bookContainer, book, paper, front, flipped, back, frontContent, backContent, rightPageTrigger, leftPageTrigger, tag, tagBack, pageCornerBackward, pageCornerForward} from "../../styles/book.module.css"
import FrontCover from "./front-cover"
import BackCover from "./back-cover"

// https://www.youtube.com/watch?v=0kD6ff2J3BQ
const Book = () => {
    const [currentLocation, setLocation] = useState(1)
    const [flipDirection, setFlipDirection] = useState(1)
    const content = [
        {front: "Front 1", back: "Back 1", has_tag: true}, 
        {front: "Front 2", back: "Back 2", has_tag: true},
        {front: "Front 3", back: "Back 3", has_tag: false},
        {front: "Front 4", back: "Back 4", has_tag: true}
    ]

    const tagColours = ["red", "orange", "blue"]
    let tagIndex = -1
    const numberOfPages = content.length + 2;
    const minLocation = 1
    const maxLocation = numberOfPages; // add +1 for back cover
    const goNextPage = () => {
        if(currentLocation < maxLocation)
            setLocation(currentLocation + 1)
            setFlipDirection(1)
    }

    const goPreviousPage = () => {
        if(currentLocation > minLocation)
            setLocation(currentLocation - 1)
            setFlipDirection(-1)
    }

    const getBookTransform = () => {
        if(currentLocation === numberOfPages + 1)
            return 'translateX(100%)'
        else if(currentLocation === minLocation)
            return 'translateX(0%)'
        else
            return 'translateX(50%)'
    }

    const getPaperZindex = (paperIndex:number) => {

        if(paperIndex === 1)
        {
            if(currentLocation > 2 && flipDirection === 1)
                return 1
            else if (currentLocation >= 2 && flipDirection === -1)
                return 1
            return numberOfPages
        }
        else
        {
            if(currentLocation > paperIndex && flipDirection === 1)
                return numberOfPages
            else if (currentLocation >= paperIndex && flipDirection === -1)
                return numberOfPages
            
            return numberOfPages - paperIndex
        }

    }

    const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

    const goToPage = async (page:number) => {
        if(currentLocation === page)
            return
        const pagesToMove = Math.abs(currentLocation - page)
        if(page > currentLocation)
        {
            setFlipDirection(1)
            for (let i = 0; i < pagesToMove; i++)
            {
                await delay(200)
                setLocation((prevState) => (prevState + 1));

            }
        }
        else
        {
            setFlipDirection(-1)
            for (let i = 0; i < pagesToMove; i++)
            {
                await delay(200)
                setLocation((prevState) => (prevState - 1));

            }
        }
    }

    return (
        <div className={bookContainer}>
        
        <div className={book}
        style={{transform: getBookTransform()}}>
            {currentLocation !== maxLocation ? <div className={rightPageTrigger} onClick={goNextPage}>Right</div> : null}
            {currentLocation !== minLocation ? <div className={leftPageTrigger} onClick={goPreviousPage}>Left</div> : null}
            <FrontCover currentLocation={currentLocation} zIndex={getPaperZindex(1)} />
            {content.map((page, index)=>{
                if(page.has_tag)
                    tagIndex++
                return <div className={`${paper} ${currentLocation >= index + 3 ? flipped : null}`}
            style={{zIndex: getPaperZindex(index+ 2)}}>
                <div className={`${front} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
                    {page.has_tag ?<div className={tag}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
                    <div className={frontContent}>
                        <h1>{page.front}</h1>
                    </div>
                </div>
                <div className={`${back} ${currentLocation === index + 2 ? pageCornerForward : null } ${currentLocation === index + 3 ? pageCornerBackward : null }`}>
                    {page.has_tag ?<div className={tagBack}  onMouseDown={() => goToPage(index + 2)} style={{backgroundColor: tagColours[tagIndex], marginLeft: `${(tagIndex + 1) * 6}%`}}></div> : null}
                    <div className={backContent}>
                        <h1>{page.back}</h1>
                    </div>
                </div>
            </div>
            })}
            <BackCover currentLocation={currentLocation} zIndex={getPaperZindex(numberOfPages)} numberOfPages={numberOfPages}/>
        </div>
        </div>
    )
}

export default Book