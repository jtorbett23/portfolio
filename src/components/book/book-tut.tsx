import React, {useState} from "react"
import {bookContainer, book, paper, front, flipped, back, frontContent, backContent, p1, p2, p3, p4, rightPageTrigger, leftPageTrigger, backCover} from "../../styles/book-tut.module.css"
// https://www.youtube.com/watch?v=0kD6ff2J3BQ
const BookTut = () => {
    const [currentLocation, setLocation] = useState(1)
    const [flipDirection, setFlipDirection] = useState(1)
    const numberOfPages = 4;
    const minLocation = 1
    const maxLocation = numberOfPages + 1;
    
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
        if(currentLocation === maxLocation)
            return 'translateX(100%)'
        else
            return 'translateX(0%)'
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
        else if(paperIndex === 2)
            return 2
        else
        {
            if(currentLocation > paperIndex && flipDirection === 1)
                return numberOfPages
            else if (currentLocation >= paperIndex && flipDirection === -1)
                return numberOfPages
            
            return numberOfPages - paperIndex
        }

    }

    return (
        <>
        <h1>{currentLocation}: {flipDirection}</h1>
        <div className={bookContainer}>
        
        <div id="book" className={book}
        style={{transform: getBookTransform()}}>
            {currentLocation !== maxLocation ? <div className={rightPageTrigger} onClick={goNextPage}>Right</div> : null}
            {currentLocation !== minLocation ? <div className={leftPageTrigger} onClick={goPreviousPage}>Left</div> : null}
            <div id={p1} className={`${paper} ${currentLocation >= 2 ? flipped : null}`}
                style={{zIndex: getPaperZindex(1)}}>
                <div className={front}>
                    <div id="f1" className={frontContent} style={{backgroundColor:"black"}}>
                        <h1>Front 1</h1>
                    </div>
                </div>
                <div className={back}>
                    <div id="b1" className={backContent}>
                        <h1>Back 1</h1>
                    </div>
                </div>
            </div>
            <div id={p2} className={`${paper} ${currentLocation >= 3 ? flipped : null}`}
            style={{zIndex: getPaperZindex(2)}}>
                <div className={front}>
                    <div id="f2" className={frontContent}>
                        <h1>Front 2</h1>
                    </div>
                </div>
                <div className={back}>
                    <div id="b2" className={backContent}>
                        <h1>Back 2</h1>
                    </div>
                </div>
            </div>
            <div id={p3} className={`${paper} ${currentLocation >= 4 ? flipped : null}`}
            style={{zIndex: getPaperZindex(3)}}>
                <div className={front}>
                    <div id="f3" className={frontContent}>
                        <h1>Front 3</h1>
                    </div>
                </div>
                <div className={back}>
                    <div id="b3" className={backContent}>
                        <h1>Back 3</h1>
                    </div>
                </div>
            </div>
                    <div id={p4} className={`${paper} ${currentLocation >= 5 ? flipped : null}`}
                        style={{zIndex: getPaperZindex(4)}}>
                <div className={front}>
                    <div id="f4" className={frontContent}>
                        <h1>Front 4</h1>
                    </div>
                </div>
                <div className={back}>
                    <div id="b4" className={backCover} style={{backgroundColor:"black"}}>
                        <h1>Back 4</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default BookTut