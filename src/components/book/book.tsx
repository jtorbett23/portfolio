import React, { useState } from "react"
import {table, sleeve, bookContainer, page, leftPageTrigger, rightPageTrigger} from "../../styles/book.module.css"

const Book = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const minPage = 1
  const maxPage = 3
  const decreasePageNumber = () => {
   if (pageNumber > minPage)
          setPageNumber(pageNumber - 2)
  }
  const increasePageNumber = () => {
    if (pageNumber < maxPage)
      setPageNumber(pageNumber + 2)
  }

  return (
    <section className={table}>
      <div className={bookContainer}>
        <div className={sleeve}>
          <div className={leftPageTrigger} onClick={decreasePageNumber}>Left</div>
          {pageNumber === 1 ? <div className={page}>Page 1</div> : null}
          {pageNumber === 1 ? <div className={page}>Page 2</div> : null}
          {pageNumber === 3 ? <div className={page}>Page 3</div> : null}
          {pageNumber === 3 ? <div className={page}>Page 4</div> : null}
          <div className={rightPageTrigger} onClick={increasePageNumber}>Right</div>
        </div>
    </div>
    </section>
  )
}

export default Book