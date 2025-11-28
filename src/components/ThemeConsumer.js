import React from "react"

import { useTheme } from "../context/ThemeContext"

const ThemeConsumer = () => {
  const { theme } = useTheme()
  return (
    <div>
      <strong>Current Theme:</strong> {theme}
    </div>
  )
}

export default ThemeConsumer
