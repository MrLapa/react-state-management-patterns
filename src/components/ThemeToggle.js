import React from "react"

import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  console.log("ThemeToggle rendered")
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  )
}

export default ThemeToggle
