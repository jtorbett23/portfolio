import React, {useState, useCallback, ChangeEvent, useEffect} from "react"
import {themeLabel} from "../styles/theme-selector.module.css"
import {isMobile} from 'react-device-detect';


type ThemeSelectorProps = {
  theme: string,
  handleChange: any
}

const ThemeSelector = ({theme, handleChange}: ThemeSelectorProps) => {
  return (
    <>
    <label className={themeLabel}>Theme:</label>
        <select name="theme" id="theme" value={theme}  onChange={handleChange}>
        {!isMobile && <option value="book">Book</option>}
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  )
}

export default ThemeSelector