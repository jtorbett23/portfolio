import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Standard from "../components/standard/standard";
import Book from "../components/book/book";
import ThemeSelector from "../components/theme-selector";
import {index, header} from "../styles/index.module.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className={index}>
      <header className={header}>
        <ThemeSelector />
      </header>
      <Standard/>
      {/* {theme.includes("book") ? <Book/> : <Standard/>} */}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
