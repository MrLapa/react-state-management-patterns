"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  )
}

export default ThemeToggle
