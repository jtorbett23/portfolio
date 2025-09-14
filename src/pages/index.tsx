import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Standard from "../components/standard/standard";
import Book from "../components/book/book";
import ThemeSelector from "../components/theme-selector";
import {index, header} from "../styles/index.module.css"
import useLocalStorage from "use-local-storage";

const IndexPage: React.FC<PageProps> = () => {
  const [theme, setTheme] = useLocalStorage("theme", "book");

  return (
    <div className={index} data-theme={theme}>
      <header className={header}>
        <ThemeSelector defaultTheme={theme} handleChange={
          (e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.value)} />
      </header>
      {theme.includes("book") ? <Book/> : <Standard/>}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
