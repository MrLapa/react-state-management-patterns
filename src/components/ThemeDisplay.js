"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeDisplay = React.memo(() => {
  const theme = useThemeStore((state) => state.theme)
  console.log("ThemeDisplay rendered")
  return <div>Current theme: {theme}</div>
})

ThemeDisplay.displayName = "ThemeDisplay"

export default ThemeDisplay
