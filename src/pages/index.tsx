import React, { useEffect, useState, ChangeEvent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Standard from "../components/standard/standard";
import Book from "../components/book/book";
import ThemeSelector from "../components/theme-selector";
import {index, header} from "../styles/index.module.css"


const IndexPage: React.FC<PageProps> = () => {
    const [theme, setTheme] = useState('light');
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        // set in gatsby ssr
        if(window.__theme !== undefined)
          setTheme(String(window.__theme))
        else
          setTheme('light')
        // setTheme(!window.__isMobile ? 'book' : 'light')
        setIsMobile(window.__isMobile)
    },[typeof window !== "undefined" && typeof window.localStorage !== undefined])
  
  
    const handleChange =
      (e:  ChangeEvent<HTMLSelectElement>) => {
        const newTheme: string = e.target.value;
        setTheme(newTheme);
        // set in gatsby ssr
        window.__setPreferredTheme(newTheme);
      }

  return (
    <div className={index}>
      <header className={header}>
        <ThemeSelector theme={theme} isMobile={isMobile} handleChange={handleChange}/>
      </header>
      <Book/>
      <Standard/>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
