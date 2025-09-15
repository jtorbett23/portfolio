import React, { useEffect, useState, useCallback, ChangeEvent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Standard from "../components/standard/standard";
import Book from "../components/book/book";
import ThemeSelector from "../components/theme-selector";
import {index, header} from "../styles/index.module.css"
import {isMobile} from 'react-device-detect';


const IndexPage: React.FC<PageProps> = () => {
    const [theme, setTheme] = useState(!isMobile ? 'book' : 'light');
  
    useEffect(() => {
        // set in gatsby ssr
        setTheme(String(window.__theme))
    },[typeof window !== "undefined" && typeof window.localStorage !== undefined])
  
  
    const handleChange = useCallback(
      (e:  ChangeEvent<HTMLSelectElement>) => {
        const newTheme: string = e.target.value;
        setTheme(newTheme);
        // set in gatsby ssr
        window.__setPreferredTheme(newTheme);
      },
      [setTheme]
    );

  const mobileStyle = isMobile ? {alignSelf: 'center'} : {alignSelf: 'flex-start'}


  return (
    <div className={index}>
      <header className={header} style={mobileStyle}>
        <ThemeSelector theme={theme} handleChange={handleChange}/>
      </header>
      <Book/>
      <Standard/>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
