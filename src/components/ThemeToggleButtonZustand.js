"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeToggleButtonZustand = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  console.log("ThemeToggleButtonZustand rendered")
  return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeToggleButtonZustand
