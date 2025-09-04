import React, { useState } from "react"
import {table, sleeve, button, bookContainer, page} from "../../styles/book.module.css"

const Book = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const minPage = 1
  const maxPage = 3
  return (
    <section className={table}>
      <div className={bookContainer}>
      <button className={button} onClick={() => {
        if (pageNumber > minPage)
          setPageNumber(pageNumber - 2)
        }}>Previous</button>
        <div className={sleeve}>
          {pageNumber === 1 ? <div className={page}>Page 1</div> : null}
          {pageNumber === 1 ? <div className={page}>Page 2</div> : null}
          {pageNumber === 3 ? <div className={page}>Page 3</div> : null}
        </div>
            <button className={button} onClick={() => {
        if (pageNumber < maxPage)
          setPageNumber(pageNumber + 2)
        }}>Next</button>
    </div>
    </section>
  )
}

export default Book