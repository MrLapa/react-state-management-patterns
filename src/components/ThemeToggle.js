"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  console.log("ThemeToggle rendered")

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  )
}

export default ThemeToggle
