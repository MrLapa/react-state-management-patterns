"use client"

import React from "react"

import useThemeStore from "../store/themeStore"

const ThemeConsumer = () => {
  const { theme } = useThemeStore()
  return (
    <div>
      <strong>Current Theme:</strong> {theme}
    </div>
  )
}

export default ThemeConsumer
