"use client"

import React from "react"

import { useTheme } from "../context/ThemeContext"

const ThemeDisplay = () => {
  const { theme } = useTheme()
  console.log("ThemeDisplay rendered")
  return <div>Current theme: {theme}</div>
}

export default ThemeDisplay
