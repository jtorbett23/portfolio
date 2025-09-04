import React, {useState} from "react"
import {bookContainer, book, paper, front, flipped, back, frontContent, backContent, p1, p2, p3} from "../../styles/book-tut.module.css"
// https://www.youtube.com/watch?v=0kD6ff2J3BQ
const BookTut = () => {
    const [currentLocation, setLocation] = useState(1)
    const numberOfPages = 3;
    const minLocation = 1
    const maxLocation = numberOfPages + 1;
    
    const goNextPage = () => {
        if(currentLocation < maxLocation)
            setLocation(currentLocation + 1)
    }

    const goPreviousPage = () => {
        if(currentLocation > minLocation)
            setLocation(currentLocation - 1)
    }

    const getBookTransform = () => {
        if(currentLocation === maxLocation)
            return 'translateX(100%)'
        else
            return 'translateX(0%)'
    }

    return (
        <div className={bookContainer}>
        
        <div id="book" className={book}
        style={{transform: getBookTransform()}}>
            <div id={p1} className={`${paper} ${currentLocation >= 2 ? flipped : null}`}
                style={{zIndex: currentLocation >= 2 ? 1 : 3}}>
                <div className={front}>
                    <div id="f1" className={frontContent}>
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
            style={{zIndex: currentLocation >= 3 ? 2 : 2}}>
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
                        style={{zIndex: currentLocation >= 4 ? 3 : 1}}>
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
        </div>
        <button onClick={goPreviousPage}>
            Prev
        </button>
        <button onClick={goNextPage}>
            Next
        </button>
        <h1>{currentLocation}</h1>
        </div>
    )
}

export default BookTut