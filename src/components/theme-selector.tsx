import React from "react"
import {themeLabel} from "../styles/theme-selector.module.css"

type ThemeSelectorProps = {
    defaultTheme: string,
    handleChange: any
}

const ThemeSelector = ({defaultTheme, handleChange}: ThemeSelectorProps) => {
  return (
    <>
    <label className={themeLabel}>Theme:</label>
        <select name="theme" id="theme" defaultValue={defaultTheme} onChange={handleChange}>
          {window.navigator.maxTouchPoints <= 1 ? <option value="book">Book</option> : null}

        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  )
}

export default ThemeSelector