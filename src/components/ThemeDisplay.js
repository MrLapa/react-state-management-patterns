import React from "react"
import { useSelector } from "react-redux"

const ThemeDisplay = () => {
  const theme = useSelector((state) => state.theme.theme)
  console.log("ThemeDisplay rendered")
  return <div>Current theme: {theme}</div>
}

export default ThemeDisplay
