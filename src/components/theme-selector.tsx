import React, {useState, useCallback, ChangeEvent, useEffect} from "react"
import {themeLabel} from "../styles/theme-selector.module.css"



const ThemeSelector = () => {

  const [theme, setTheme] = useState('light');

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

  return (
    <>
    <label className={themeLabel}>Theme:</label>
        <select name="theme" id="theme" value={theme}  onChange={handleChange}>
        {/* <option value="book">Book</option> */}
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  )
}

export default ThemeSelector