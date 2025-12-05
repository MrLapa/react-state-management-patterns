"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeDisplayZustand = () => {
  const { theme } = useThemeStore()
  console.log("ThemeDisplayZustand rendered")
  return <div>Current theme: {theme}</div>
}

export default ThemeDisplayZustand
