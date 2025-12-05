"use client"

import React from "react"

import { useTheme } from "../context/ThemeContext"

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme()
  console.log("ThemeToggleButton rendered")
  return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeToggleButton
