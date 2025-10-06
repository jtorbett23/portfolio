import React from "react"
import {themeLabel, themeSelect} from "../styles/theme-selector.module.css"


type ThemeSelectorProps = {
  theme: string,
  handleChange: any,
  isMobile: boolean
}

const ThemeSelector = ({theme, handleChange, isMobile}: ThemeSelectorProps) => {
  return (
    <div style={{display:"flex", alignItems: "center"}}>
    <label className={themeLabel}>Theme:</label>
      <select className={themeSelect} name="theme" id="theme" value={theme}  onChange={handleChange}>
      {!isMobile && <option value="book">Book</option>}
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    </div>
  )
}

export default ThemeSelector