"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeDisplay = () => {
  const { theme } = useThemeStore()
  console.log("ThemeDisplay rendered")
  return <div>Current theme: {theme}</div>
}

export default ThemeDisplay
