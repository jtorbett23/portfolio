import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Standard from "../components/standard/standard";
import Book from "../components/book/book";
import ThemeSelector from "../components/theme-selector";
import {index, header} from "../styles/index.module.css"

const IndexPage: React.FC<PageProps> = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light")
    else
      setTheme(String(localStorage.getItem("theme")))
  },[typeof window !== "undefined" && typeof window.localStorage !== undefined])
  return (
    <div className={index} data-theme={theme}>
      <header className={header}>
        <ThemeSelector defaultTheme={theme} handleChange={
          (e: React.ChangeEvent<HTMLInputElement>) => {
            localStorage.setItem("theme", e.target.value)
            setTheme(e.target.value)}} />
      </header>
      {theme.includes("book") ? <Book/> : <Standard/>}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
