import React from "react"
import { useSelector } from "react-redux"

const ThemeConsumer = () => {
  const theme = useSelector((state) => state.theme.theme)
  return <div>Current theme: {theme}</div>
}

export default ThemeConsumer
